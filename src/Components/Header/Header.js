import React from 'react';
import Navbar from '../Navbar/Navbar';
import Searchform from '../Searchform/Searchform';
import './Header.css';

function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <Searchform />
      </header>
    </div>
  )
}

export default Header