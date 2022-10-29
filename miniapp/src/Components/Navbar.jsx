import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const active={
    fontSize:'30px',
    textDecoration: 'none',
    fontWeight:500,
    color:'#F913B3'
  }
  const unactive={
    fontSize:'20px',
    textDecoration: 'none',
    fontWeight:900,
    
  }
  return (
    <>
      <div className={styles.navmain}>
        <div>
          <NavLink to="/"
           style={({isActive})=>(isActive)?active:unactive}
          >Home</NavLink>
        </div>
        <div>
          <NavLink to="/product"
          style={({isActive})=>(isActive)?active:unactive}
          >Product</NavLink>
        </div>
        <div className={styles.authdiv}>
          <div >
            <NavLink to="/login"
            style={({isActive})=>isActive?active:unactive}
            >Login</NavLink>
          </div>
          <div>
            <NavLink to="/signup"
            style={({isActive})=>isActive?active:unactive}
            >SignUp</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
