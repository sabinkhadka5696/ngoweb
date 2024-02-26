import React from 'react'
import { Button, Card, Carousel, Col, Container, ProgressBar, Row } from 'react-bootstrap'

function Causes() {
    const now = 60;
    const now1 = 40;
    const now2 = 75;
    const now3 = 50;
    
  return (
    <>
    <div className='causes py-5'data-aos="fade-down">
        <h1>Our causes</h1>
    </div>
    <Container>
      <Row>
        <Col> <Card data-aos="fade-right" data-aos-duration="1000" style={{ height: '100%' }}>
      <Card.Img variant="top" src="image4.jpg" />
      <Card.Body className='cause-body'>
      <ProgressBar  now={now} label={`${now}%`} />;
        <Card.Title className='card-title'>HUNGER AND POVERTY </Card.Title>
        <Card.Text className='content py-3'>
          Sit lorem et et elitr justo, et sit rebum elitr takimata est diam ea gubergren, stet lorem tempor amet dolor nonumy ea. Stet ipsum ipsum est labore voluptua lorem amet.
        </Card.Text>
        <Button variant="primary">DONATE NOW</Button>
      </Card.Body>
    </Card></Col>

        <Col> <Card data-aos="fade-right"    data-aos-delay="50" data-aos-duration="1000"style={{height: '100%' }}>
      <Card.Img variant="top" src="image5.jpg" />
      <Card.Body className='cause-body'>
      <ProgressBar now={now1} label={`${now1}%`} />;
        <Card.Title>EDUCATION AND TRAINING</Card.Title>
        <Card.Text className='content py-3'>
         Dolores sit dolor clita duo no diam et, at sed et et aliquyam sit sanctus et vero, elitr kasd sed et magna dolores erat. Eirmod kasd aliquyam sanctus et. Sed.
        </Card.Text>
        <Button variant="primary">DONATE NOW</Button>
      </Card.Body>
    </Card></Col>

     <Col> <Card data-aos="fade-right" data-aos-delay="100"    data-aos-duration="1000" style={{ height: '100%' }}>
      <Card.Img variant="top" src="image6.jpg" />
      <Card.Body className='cause-body'>
      <ProgressBar now={now2} label={`${now2}%`} />;
        <Card.Title>HUMAN RIGHTS</Card.Title>
        <Card.Text className='content py-3'>
          Clita sadipscing sea sea no et. Sadipscing tempor lorem ut no amet et eirmod stet, rebum sed rebum dolore magna, ipsum no nonumy ea et. Et dolore tempor sit tempor.
        </Card.Text>
        <Button variant="primary">DONATE NOW</Button>
      </Card.Body>
    </Card></Col>

    <Col> <Card data-aos="fade-right" data-aos-delay="150"    data-aos-duration="1000" style={{ height: '100%' }}>
      <Card.Img variant="top" src="image7.jpg" />
      <Card.Body className='cause-body'>
      <ProgressBar now={now3} label={`${now3}%`} />;
        <Card.Title>ARTS AND CULTURE </Card.Title>
        <Card.Text className='content py-3'>
         Aliquyam elitr sanctus diam sanctus aliquyam sit sadipscing, sanctus no tempor erat eirmod, no erat ea at at magna lorem sed duo, duo et eos et dolores. Diam diam diam.
        </Card.Text>
        <Button variant="primary">DONATE NOW</Button>
      </Card.Body>
    </Card></Col>
    
      </Row>
    </Container>


    
   

    </>
  )
}

export default Causes