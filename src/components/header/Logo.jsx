import React from 'react';
import logoImage from '../../images/tudor-black-bay-half.png';

const Logo = () => {
  return(
    <div className='header-logo'>
      <img src={logoImage} alt='Watchlist' />
    </div>
  );
}

export default Logo;