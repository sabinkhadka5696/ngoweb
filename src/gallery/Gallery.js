import React from 'react'
import './gallery.css'
function Gallery() {
  return (
    <>
    <h2 className='gallery-title'>OUR GALLERY</h2>
    <div className='container'data-aos='fade-down'>
      <div className='gallery-content'>
      <img src='image1.jpg'></img>
      <img src='image2.jpg'></img>
      <img src='image3.jpg'></img>
      <img src='image4.jpg'></img>
      <img src='image5.jpg'></img>
      <img src='image6.jpg'></img>
      <img src='image7.jpg'></img>
    </div>
    </div>
    </>
  )
}

export default Gallery