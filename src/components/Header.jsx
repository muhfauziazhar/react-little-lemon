import * as React from 'react';
import headerImg from '../assets/images/Asset 16@4x.png'

const Header = () => {
  return (
    <header className="container">
      <img src={headerImg} alt="Company Brand Logo" className="logo" />
    </header>
  );
};

export default Header;
