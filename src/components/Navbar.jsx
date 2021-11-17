import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../img/vegan-plan-logo.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink exact to='/' className='nav-logo'>
            <img
              src={logo}
              width={130}
              alt='Vegan Plan logo'
            />
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Hem
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Om oss
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/recept'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Recept
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/mina-sidor'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                <button className='btn-myPage'>Mina sidor</button>
              </NavLink>
            </li>
            <li className='nav-item'></li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
