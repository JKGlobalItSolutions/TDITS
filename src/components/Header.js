import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  const location = useLocation();

  const navLinkStyle = {
    fontSize: '18px',
    padding: '10px 15px',
    margin: '0 5px',
    borderRadius: '5px',
    transition: 'all 0.3s ease'
  };

  const activeStyle = {
    backgroundColor: '#e6f2ff',
    color: '#0066cc',
    fontWeight: 'bold'
  };

  return (
    <Navbar bg="light" expand="lg" className="px-1">
      <Navbar.Brand as={Link} to="/">
        <img src="/images/logo.png" alt="TDITS Logo" height="60" className="d-inline-block align-top mx-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" style={{...navLinkStyle, ...(location.pathname === "/" ? activeStyle : {})}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{...navLinkStyle, ...(location.pathname === "/about" ? activeStyle : {})}}>About</Nav.Link>
          <Nav.Link as={Link} to="/gallery" style={{...navLinkStyle, ...(location.pathname === "/gallery" ? activeStyle : {})}}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="/events" style={{...navLinkStyle, ...(location.pathname === "/events" ? activeStyle : {})}}>Events</Nav.Link>
          <Nav.Link as={Link} to="/membership" style={{...navLinkStyle, ...(location.pathname === "/membership" ? activeStyle : {})}}>Membership</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{...navLinkStyle, ...(location.pathname === "/contact" ? activeStyle : {})}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
