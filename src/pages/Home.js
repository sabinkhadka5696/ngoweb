import React from 'react'
import { Button, Card, Carousel, Col, Container,Row } from 'react-bootstrap'
import Causes from './Causes'
import './home.css'
function Home() {
  return (
    <>
    <section className=' mx-4 '>
       <Carousel data-bs-theme="dark ">
      <Carousel.Item>
        <img
          className="home-img"
          src="image1.jpg"
          alt="image"
        />
        <Carousel.Caption>
          <h1 className='home-context'data-aos="fade-down" data-aos-easing="linear">BECAUSE THEY NEED YOUR HELP</h1>
          <p className='home-subtitle'data-aos="fade-up"data-aos-easing="linear">DO NOT LET THEM DOWN</p>
          <Button className='home-btn'data-aos="fade-up"data-aos-easing="linear">DONATE NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-img"
          src="image2.jpg"
          alt="image"
        />
        <Carousel.Caption>
          <h1 className='home-context'data-aos="fade-down" data-aos-duration="300">Together we can improve their</h1>
          <h1 className='home-context'data-aos="fade-down" data-aos-duration="300">lives</h1>
          <p className='home-subtitle'data-aos="fade-up" data-aos-duration="300">So let's do it !</p>
          <Button className='home-btn'data-aos="fade-up" data-aos-duration="300">DONATE NOW</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-img"
          src="image3.jpg"
          alt="image"
        />
        <Carousel.Caption>
          <h1 className='home-context'data-aos="fade-down" data-aos-easing="linear"data-aos-duration="300">A penny is a lot of money, if you </h1>
          <h1 className='home-subtitle'data-aos="fade-down" data-aos-easing="linear"data-aos-duration="300">have not got a penny. </h1>
          <p className='home-subtitle'data-aos="fade-up" data-aos-easing="linear"data-aos-duration="300">
          You can make the diffrence !
          </p>
          <Button className='home-btn'data-aos="fade-up" data-aos-easing="linear"data-aos-duration="300">DONATE NOW</Button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

<section className='py-5'>
    <Container data-aos="fade-right" data-aos-duration="1000"    data-aos-easing="ease-in-out">
      <Row>
        <Col>  <Card className='card-content text white'>
      <Card.Img className="card-img py-3"variant="top" src="logo1.png" />
      <Card.Body className='text-white'>
        <Card.Title >OUR MISSION</Card.Title>
        <Card.Text className='my-4'>
         Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card  className='card-content'>
      <Card.Img className="card-img py-3"variant="top" src="logo2.png" />
      <Card.Body className='text-white'>
        <Card.Title >MAKE DONATIONS</Card.Title>
        <Card.Text className='my-4'>
         Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card  className='card-content'>
      <Card.Img className="card-img py-4" variant="top" src="logo3.png" />
      <Card.Body className='text-white'>
        <Card.Title >HELP & SUPPORT</Card.Title>
        <Card.Text className='my-4'>
         Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card  className='card-content'>
      <Card.Img className="card-img py-4" variant="top" src="logo4.png" />
      <Card.Body className='text-white'>
        <Card.Title >OUR PROGRAMS</Card.Title>
        <Card.Text className='my-3'>
         Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    </section>


    <Container className='py-5'data-aos="slide-right"data-aos-duration="1500">
    <Row>
  <Col>
  <Card  className='imgoverlay' style={{ width: '35rem' }}>
      <Card.Img variant="top" src="image1.jpg" />
      <Card.ImgOverlay className='body-imgoverlay'>
        <Card.Text className='imgoverlay-title'>
          

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

         
        </Card.Text>
        <Button className='card-button px-5'>Read More</Button>
        </Card.ImgOverlay>
    </Card>
  </Col>

  
  <Col>
  <Card className='imgoverlay' style={{ width: '35rem' }}>
      <Card.Img variant="top" src="image3.jpg" />
      <Card.ImgOverlay className='body-imgoverlay'>
        <Card.Text className='imgoverlay-title'>
          

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.

        </Card.Text>
        <Button className='card-button px-5'>Read More</Button>

        </Card.ImgOverlay>
    </Card>
  </Col>
</Row>
<Causes/>
</Container>
    </>
  )
}

export default Home