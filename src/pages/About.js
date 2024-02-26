import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaSignal } from "react-icons/fa";
import { PiFireFill } from "react-icons/pi";
function About() {
  return (
    <>
     <Row>
        <Col>
        <div className='container about-bg'>
           <div className='about-content'>
              <h2>I want to spend my life helping people,</h2>
              <h3>how can I do so while also making a good living?</h3>
              <p>We felt the risky environment and circumstances for children over the world. Then we started working for them in a village. Day after day, we received a delightful response from the people who keep....</p>
              <Button className='btn-join'>Join us</Button>
            </div>
         </div>
        </Col>
      </Row>

      <Container className='py-4'>
      <Row>
        <Col data-aos='fade-right'    data-aos-duration="1000"><FaSignal className='signal' />
            <h3 className='signal-head'>OUR MISSION</h3>
            <p className='signal-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ali- quam neque urna, venenatis convallis quam et, facilisis vestib- ulum nunc.Integer vitae condimentumOportune che donne eterni infiniti noi cospetto. </p>
            <Button className='btn-learn'>LEARN MORE</Button>
            </Col>
  
        <Col data-aos='fade-left'    data-aos-duration="800">
        <PiFireFill  className='signal' />
            <h3 className='signal-head'>OUR MISSION</h3>
            <p className='signal-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ali- quam neque urna, venenatis convallis quam et, facilisis vestib- ulum nunc.Integer vitae condimentumCospetto lui dio seguitando cosa in mente.</p>
            <Button className='btn-learn'>LEARN MORE</Button>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default About