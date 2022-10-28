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
        <div>
            <button onClick={handleShow}>Cart</button>
        </div>

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
`;
