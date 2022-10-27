import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { OneCard } from "../Component/OneCard";

export const User = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  let api = "http://localhost:8080/candidates";

  function fetchData(page) {
    axios({
      method:'get',
      url:api,
       params: {
        _limit:5,
        _page:page
      }})
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchData(page);
  }, [data.length,page]);

  console.log(data.length);

  return (
    <>
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
