import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-wrapper container sticky top-0">
      <ul className="nav py-4">
        <li className="nav-item text-md md:text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item text-md md:text-2xl">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item text-md md:text-2xl">
          <Link to="/reserve">Reserve</Link>
        </li>
        <li className="nav-item text-md md:text-2xl">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item text-md md:text-2xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
