import React from 'react';
import '../../stylesheets/Header.css';

import Logo from './Logo';
import Title from './Title';

class Header extends React.Component {
  render() {
    return(
      <div className="app-header">
        <Logo />
        <Title />
      </div>
    );
  }
}

export default Header;