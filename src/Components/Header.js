import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaInstagramSquare } from "react-icons/fa";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Causes from '../pages/Causes';
import Gallery from '../gallery/Gallery';
import Contact from '../contact/Contact';
function Header() {
  return (
    <>
    <Nav defaultActiveKey="/home" as="ul" class='nav'>
      <Nav.Item as="li">
        <Nav.Link href="https://www.facebook.com/"><FaFacebook /></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="https://twitter.com/"><FaTwitter /></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="https://gmail.com/"><TfiGoogle /></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="https://www.instagram.com/"><FaInstagramSquare /></Nav.Link>
      </Nav.Item>
      <Nav className="ms-auto">
            <Nav.Link href="#home">+977-9761664950</Nav.Link>
            <Nav.Link href="#link">sabinkhadka147@gmail.com</Nav.Link>
        </Nav>
    </Nav>

    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <NavLink className='nav-link' to="/">HELPZ</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/">HOME</NavLink>
            <NavLink className="nav-link" to="/about">ABOUT</ NavLink>
            <NavLink className="nav-link" to="/causes">CAUSES</NavLink>
            <NavLink className="nav-link" to="/gallery">GALLERY</ NavLink>
            <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
          </Nav>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>
    </>
  )
}

export default Header