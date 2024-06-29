import React, { useState } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbarstyles.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/'  style={({ isActive }) => ({ color: isActive ? '#F33A6A' : 'black'})} className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/services'
              style={({ isActive }) => ({ color: isActive ? '#F33A6A' : 'black'})}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Programs
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/products'
              style={({ isActive }) => ({ color: isActive ? '#F33A6A' : 'black'})}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Success Story
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/contact-us'
              className='nav-links'
              style={({ isActive }) => ({ color: isActive ? '#F33A6A' : 'black'})}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-up'
              className='nav-links-mobile'
              style={({ isActive }) => ({ color: isActive ? '#F33A6A' : 'black'})}
              onClick={closeMobileMenu}
            >
              Book a Demo
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;