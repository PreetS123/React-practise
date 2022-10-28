import React, { useState, useEffect } from "react";
import { ProductCard } from "../Components/ProductCard";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { MIniNav } from "../Components/MIniNav";

export const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  let api = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;
  const fetchData = (page) => {
    fetch(api+`?page=${page}&limit=9`)
      .then((r) => r.json())
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);
  console.log(data);

  return (
  <>
    <MIniNav />
  <ProductPageDivWrapper>
       {
         data?.map(item=>{
            return <ProductCard key={nanoid()} item={item} />
         })
       }
       </ProductPageDivWrapper>
       <PaginationDiv>
           <PageButton disabled={page===1} onClick={()=>setPage(page-1)}>Prev</PageButton>
           <PageButton disabled={data.length===0} onClick={()=>setPage(page+1)}>Next</PageButton>
       </PaginationDiv>
      
  </>
  );
};


const ProductPageDivWrapper=styled.div`
width:100%;
height:fit-content;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
justify-content:space-around;
align-items:center;
`;

const PaginationDiv=styled.div`
width:100%;
height:60px;
 display:flex;
 gap:30px;
 justify-content:center;
 align-items:center;
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const PageButton=styled.button`
 width:60px;
 height:40px;
 border:2px solid purple;
 color:purple;
 padding:1%;
 background-color:pink;
`;