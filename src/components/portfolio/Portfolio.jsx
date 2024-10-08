import React from 'react'
import './portfolio.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const items = [
  {
    id:1,
    name: "Uneral Image Recognition",
    description: "A game using Unreal Engine 4 and TensorFlow to recognize handrawn images and letters ofr the purpose of" 
    + "hangman and guess the drawing",
    image: "public/Projects/UnrealAI.png"
  }
]

var settings = { 
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};


const Portfolio = () => {

  return (
    
    <div className="projects">
       <Slider {...settings}>
        {items.map((p) => (
            <div key={p.id} className="mainCard">
                <div className='imageContainer'>
                    <img src={p.image} alt=""/>
                </div>
                <div>
                    <p>{p.name}</p>
                    <p>{p.description}</p>
                    <button>View Project</button>
                </div>
            </div>
        ))}
        </Slider>
    </div>
    
  )
}

export default Portfolio;
