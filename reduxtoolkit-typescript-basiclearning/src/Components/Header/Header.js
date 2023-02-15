import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';


const Header = () => {
    return (
        <div className='header'>
          <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img 
        src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png' 
        alt="user" />
      </div>   
        </div>
    )
}

export default Header