import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg" style={{
      backgroundColor: '#BFCDE0',
      width: 'fit-content',
      borderRadius: '10px',
      border: '1px solid #000505',
      position: 'fixed',
      top: 1,
      right: 0,
    }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
          <Nav.Link href="#about" onClick={() => handlePageChange('About')} active={currentPage === 'About'}>About</Nav.Link>
          <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} active={currentPage === 'Portfolio'}>Portfolio</Nav.Link>
          <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} active={currentPage === 'Resume'}>Resume</Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} active={currentPage === 'Contact'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;