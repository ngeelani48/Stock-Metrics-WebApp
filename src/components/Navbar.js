import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaArrowLeft, FaCog } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header>
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="left-arrow">
          <FaArrowLeft className="icon" />
        </Link>
        <h1>Market</h1>
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
