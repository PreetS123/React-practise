import React from 'react';
import styled from 'styled-components';
import { FaMoon ,FaSun} from "react-icons/fa";

export const Navbar = () => {
  return (
    <NavbarWrapper>
       <div>
        <h4>Country App</h4>
       </div>
       <div>
       <button><FaMoon/></button>
       </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper= styled.div`
width:100%;
height:60px;
display:flex;
justify-content:space-evenly;
align-items:center;
gap:20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
