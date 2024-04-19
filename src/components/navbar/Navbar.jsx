import React, { useState, useEffect } from 'react';
import './navbar.css'
import Button from '../button/Button'
const Navbar = () => {
  const [theme, setTheme] = useState('light');
  //zmienianie theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };



  return (
    <nav className='main-navbar'>
        <img src='src\assets\logo2.png' alt="logo" className='navbar__logo'/>
        <div className='navbar__options'>
            <p><a href="#offers">Offers</a></p>
            <p><a href="#addOns">Add-Ons</a></p>
            <p><a href="#clients">Clients</a></p>
            <p><a href="#questions">Common Questions</a></p>
            
        </div>

        <input type="checkbox" id="theme-toggle" onChange={toggleTheme} className="hidden-checkbox" />
        <label htmlFor="theme-toggle" className="toggle-button"></label>

        <div className='navbar__buttons'>
          <Button color={''} content={'Log In'} />
          <Button color={'green'} content={'Register'} />
        </div>

    </nav>
  )
}

export default Navbar
