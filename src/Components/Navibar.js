import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navibar.css";
import navCover from '../Images/Florance.png';

export default function Navibar() {
  return (
   <div>
      <Navbar fixed="top" expand="lg" data-bs-theme="light" className="custom-navbar py-4">
        <Container>
          <Navbar.Brand> <img 
              src={navCover} 
              alt="Navigation Cover" 
              className="nav-cover-img" 
              style={{ width: "150px", height: "50px" }}
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" /> {/* Toggle button */}
          <Navbar.Collapse id="navbar-nav">
            {/* Collapsible section */}
            <Nav className="ms-auto">
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">Sign In</Nav.Link>
              <Nav.Link href="#">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   </div>
  );
}
