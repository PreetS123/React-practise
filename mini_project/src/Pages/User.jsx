import axios from 'axios';
import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { OneCard } from '../Component/OneCard';

export const User = () => {
    const [data,setData]= useState([]);
    
    let api='http://localhost:8080/candidates'

    function fetchData(){
    axios.get(api)
    .then(r=>setData(r.data))
    .catch(e=>console.log(e))
    }

    useEffect(()=>{
        fetchData();
    },[data.length])

    console.log(data);

  return (
    <>
    <UserDivWrapper>
      {
        data?.map(item=>{
          return <OneCard key={nanoid()} {...item} />
        })
      }
    </UserDivWrapper>
    </>
  )
}


const UserDivWrapper=styled.div`
     display: flex;
     flex-direction:column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 90%;
    height: fit-content;
    padding: 2%;
`;