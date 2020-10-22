import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Bronx from '../photos/bronx.jpg';
import Image from 'react-bootstrap/Image';

const HomeCarousel = (props) => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image
                className="carousel-item"
                src={Bronx}
                alt="First slide"
                fluid/>
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Image
                className="carousel-item"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="carousel-item"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                fluid/>
            </Carousel.Item>
        </Carousel>
    )
}


export default HomeCarousel;