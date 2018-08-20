import React from 'react';
import '../../stylesheets/NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-item'>
        Home
      </div>
      <div className='nav-item'>
        Forums
      </div>
      <div className='nav-item'>
        Search
      </div>
    </div>
  );
};

export default NavBar;