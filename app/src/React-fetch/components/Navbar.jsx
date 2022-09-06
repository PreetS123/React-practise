import React from 'react';
import { Link  as RouterLink} from 'react-router-dom';
import styled from 'styled-components';


export const Navbar = () => {
  
  return (
    <>
      <NavbarWrapper>
        <RouterLink  to='/'>All</RouterLink>
        <RouterLink  to='/html'>HTML</RouterLink>
        <RouterLink  to='/css'>CSS</RouterLink>
        <RouterLink  to='/js'>JavaScript</RouterLink>
      </NavbarWrapper>
    </>
  )
}



const NavbarWrapper=styled.div`
   width:100%;
   height:40px;
   padding:2%;
   border:5px solid purple;
   font-size:20px;
   display:flex;
   justify-content:space-evenly;
   align-items:center;
`;

