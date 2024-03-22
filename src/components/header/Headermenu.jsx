import React from 'react';
import './Headermenu.scss'; // Import your stylesheet for customization
import { IoCartOutline } from "react-icons/io5";
const HeaderMenu = () => {
  return (
    <header className='header-menu'>
      <div className='header-left'>
        <span className='website-name'>Plateful</span>
      </div>
      <div className='header-right'>
      <a href="/cart"><IoCartOutline className='cart-icon'/></a> {/* Font Awesome icon for cart */}
      <div className='dot'> </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
