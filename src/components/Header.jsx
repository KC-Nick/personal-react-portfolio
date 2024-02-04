import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <h1>Welcome to My Portfolio</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};

export default Header;