import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const MIniNav = () => {
     const navigate= useNavigate();
   
    const handleShow=()=>{
         navigate('/cart')
    }
  return (
    <>
    <MiniNavWrapper>
        <OneDiv>
            <ButtonDiv onClick={handleShow}>Cart</ButtonDiv>
        </OneDiv>

    </MiniNavWrapper>
           
    </>
  )
}


const MiniNavWrapper=styled.div`
 display:flex;
 flex-direction:row-reverse;
 align-items:center;
 height:50px;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
 margin-bottom:8px;
`;

const OneDiv=styled.div`
padding:2%;
`;

const ButtonDiv=styled.button`
  width:80px;
  height:30px;
  border:none;
  border-radius:10px;
  font-size:20px;
  font-weight:900;
  background-color:#F913B3;
  color:white;
`;
