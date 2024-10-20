import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navibar.css";
import navCover from "../Images/Florance.png";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        data-bs-theme="light"
        className="custom-navbar py-4"
      >
        <Container>
          <Navbar.Brand  as={Link} to="/">
              <img
                src={navCover}
                alt="Navigation Cover"
                style={{ width: "150px", height: "50px" }}
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" /> {/* Toggle button */}
          <Navbar.Collapse id="navbar-nav">
            {/* Collapsible section */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/About"}>About Us</Nav.Link>
              <Nav.Link as={Link} to={"/DeliveryInfo"}>Delivery Info</Nav.Link>
              <Nav.Link as={Link} to={"/ContactUs"}>Contact Us</Nav.Link>
              <Nav.Link >Sign In</Nav.Link>
              <Nav.Link >Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
