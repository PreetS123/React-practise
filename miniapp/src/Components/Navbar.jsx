import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.navmain}>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/product">Product</NavLink>
        </div>
        <div className={styles.authdiv}>
          <div >
            <NavLink to="/login">Login</NavLink>
          </div>
          <div>
            <NavLink to="/signup">SignUp</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
