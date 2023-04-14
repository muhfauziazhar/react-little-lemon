import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="main-wrapper container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
