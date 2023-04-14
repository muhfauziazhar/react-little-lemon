import React from 'react';
import footerImg from '../assets/images/Asset 9@4x.png'

const Footer = () => {
  return (
    <footer className="container">
      <img src={footerImg} alt="Little Lemon Logo Footer" className="footer-logo" />
      <p>© 2023 LITTLE LEMON. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
