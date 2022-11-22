import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

export const Navbar = () => {
    const {isLight,toggleTheme}= useContext(ThemeContext);


  return (
    <div className='nav'>
        <NavLink to='/' >Home Page</NavLink>
        <button onClick={toggleTheme}>{`${isLight?"DARK":"LIGHT"}`}</button>
    </div>
  )
}
