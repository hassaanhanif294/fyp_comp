import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarousalPic from './CAROUSAL.jpg';
import CarousalPic1 from './logo2.jpg';
export default function Carousal() {
  return (
    <div className=''>
    <div className='container  '>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 shadow"
        src={CarousalPic1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={CarousalPic}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={CarousalPic}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>

  )
}
