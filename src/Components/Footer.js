import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
     <footer className="py-5 footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
      <Navbar.Brand href="#home">HELPZ</Navbar.Brand>
        <p className="text-uppercase text-muted py-3">HELPZ is a Crowdfunding & Charity Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <div className="icons-bar">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagramSquare /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <div className="col-lg-3">
        <h5>Resources</h5>
        <ul>
          <li> <a href="#">How it works</a></li>
          <li> <a href="#"> Ask A Question</a></li>
          <li> <a href="#">Project Story</a></li>
          <li> <a href="#">Mission</a></li>
          <li> <a href="#">Certificates</a></li>
          <li> <a href="#">Certificates</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h5>Company</h5>
        <ul>
          <li> <a href="#"> About Us</a></li>
          <li> <a href="#"> Volunteer</a></li>
          <li> <a href="#">Happy Clients</a></li>
          <li> <a href="#"> Project</a></li>
          <li> <a href="#"> Contact Us</a></li>
          <li> <a href="#">Faq</a></li>
        </ul>      
      </div>
      <div className="col-lg-3 abc">
        <h5>Get in Touch with Us</h5>
        <Container>
      <Row>
        <Col className='location'><ImLocation2 /></Col>
        <span>832 Thompson Drive, San Fransisco CA 94107, United States</span>
        </Row>
        <Row>
        <Col className='location'><IoCall /></Col>
        <span>+977-9761664950</span>
        </Row>
        <Row>
        <Col className='location'><IoIosMail /></Col>
        <span>sabinkhadka147@gmail.com</span>
      </Row>
    </Container>
        </div>
    </div>
  </div>    
</footer>

    </>
  )
}

export default Footer