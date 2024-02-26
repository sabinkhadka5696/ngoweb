import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Sponser() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <section className="py-4">
    <div>
    <div className='causes py-5'data-aos="zoom-in-down"    data-aos-duration="700">
        <h1>Our Sponsors </h1>
    </div>
        <Slider {...settings}>
          <div>
           <img src="image1.svg"></img>
          </div>
          <div>
          <img src="image2.svg"></img>
          </div>
          <div>
          <img src="image3.svg"></img>
          </div>
          <div>
          <img src="image4.svg"></img>
          </div>
          <div>
          <img src="image5.svg"></img>
          </div>
          <div>
          <img src="image6.svg"></img>
          </div>
        </Slider>
      </div>
      </section></>
  )
}

export default Sponser