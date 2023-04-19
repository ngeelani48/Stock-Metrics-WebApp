import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaArrowLeft, FaCog } from 'react-icons/fa';
import logo from '../images/logo.png';

import '../styles/Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="left-arrow">
            <FaArrowLeft className="icon" />
          </Link>
        </div>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Forex Exchange</h1>
        </div>
        <div className="right-icons">
          <FaMicrophone className="icon" />
          <FaCog className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
