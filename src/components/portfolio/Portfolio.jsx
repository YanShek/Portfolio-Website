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
    name: "Unreal Image Recognition",
    description: "A game using Unreal Engine 4 and TensorFlow to recognize handrawn images and letters for the purpose of" 
    + " hangman and guess the drawing",
    image: "/Projects/UnrealAI.png"
  },
  {
    id:2,
    name: "Course Enrollment System with Server Interaction (Java)",
    description: "A course enrollment system that allows students to enroll in courses for a specific semester. The request is then sent to a server to be processed",
    image: "/Projects/Schedule.png"
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
                <div className='textContainer'>
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
