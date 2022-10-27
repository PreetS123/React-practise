import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { OneCard } from "../Component/OneCard";

export const User = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [text,setText]= useState('');
  const [querry,setQuerry]= useState('');

  let api = "http://localhost:8080/candidates";

  function fetchData(page,querry) {
    axios({
      method:'get',
      url:api,
       params: {
        _limit:5,
        _page:page,
         q:querry
      }})
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchData(page,querry);
  }, [page,querry]);

  // console.log(data.length);
   
  const handleClick=(querry)=>{
    setQuerry(querry)
  }


  return (
    <>
    <SearchBarWrapper>
      <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}  />
      <button onClick={()=>handleClick(text)}>Search</button>
    </SearchBarWrapper>
      <UserDivWrapper>
        {data?.map((item) => {
          return <OneCard key={nanoid()} {...item} />;
        })}
      </UserDivWrapper>
      <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={data.length===0} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </>
  );
};

const UserDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 90%;
  height: fit-content;
  padding: 2%;
`;

 const SearchBarWrapper=styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
 gap: 20px;
 width:70%;
 height:40px;
 padding:2%;
 `;