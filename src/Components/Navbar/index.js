import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import React from 'react'
import * as reactBootstrap from 'react-bootstrap'
import logo from '../src/logo.png';


const Navbar2 = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <reactBootstrap.Nav>
            <reactBootstrap.NavDropdown title="Products">
              <reactBootstrap.NavDropdown.Item href="#products/tea">Tea</reactBootstrap.NavDropdown.Item>
              <reactBootstrap.NavDropdown.Item href="#products/coffee">Coffee</reactBootstrap.NavDropdown.Item>
              <reactBootstrap.NavDropdown.Item href="#products/chocolate">Chocolate</reactBootstrap.NavDropdown.Item>
              <reactBootstrap.NavDropdown.Divider />
              <reactBootstrap.NavDropdown.Item href="#products/promo">Promo</reactBootstrap.NavDropdown.Item>
            </reactBootstrap.NavDropdown>
            <reactBootstrap.Nav.Link href="#blog">Blog</reactBootstrap.Nav.Link>
            <reactBootstrap.Nav.Link href="#about-us">About Us</reactBootstrap.Nav.Link>
            <reactBootstrap.Nav.Link href="#contact-us">Contact Us</reactBootstrap.Nav.Link>
          </reactBootstrap.Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        This is a content.
      </div>
    </div>
  );
};

export default Navbar2;