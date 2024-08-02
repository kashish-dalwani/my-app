import React from 'react';
import './navbar.css'; 
import logo from './assets/logo.png'; 



function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <select className="Home">
          <option value="home">Home</option>
          <option value="home1">Home1</option>
          <option value="home2">Home2</option>
          <option value="home3">Home3</option>
        </select>
        <li><a href="#about">About</a></li>
        <li><a href="#findoctor">Find Doctor</a></li>
        <li><a href="#blog">Blog</a></li>
        <select className="Pages">
          <option value="pages">Pages</option>
          <option value="page1">Page1</option>
          <option value="page2">Page2</option>
          <option value="page3">Page3</option>
        </select>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
