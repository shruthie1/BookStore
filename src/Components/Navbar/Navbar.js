import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const [toggleMenu, settoggleMenu] = useState(false);
  const handleNavbar = () => settoggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <span className='fw-7 fs-20 ls-1'>Find your book of choice.</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#000" : "#fff"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link fs-22 fw-6 ls-1' onClick={handleNavbar}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link fs-22 fw-6 ls-1' onClick={handleNavbar}>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="cart" className='nav-link fs-22 fw-6 ls-1' onClick={handleNavbar}>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar