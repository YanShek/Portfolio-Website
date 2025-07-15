import React from 'react'
import './portfolio.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Navbar from '../navbar/Navbar';
import { motion } from 'framer-motion';

const items = [
  {
    id:1,
    name: "Unreal Image Recognition",
    description: "A game using Unreal Engine 4 and TensorFlow to recognize handrawn images and letters for the purpose of" 
    + " hangman and guess the drawing",
    image: "/Projects/UnrealAI.png",
    link: "https://github.com/JustinACoder/H22-GR3-UnrealAI"
  },
  {
    id:2,
    name: "Course Enrollment System with Server Interaction (Java)",
    description: "A course enrollment system that allows students to enroll in courses for a specific semester. The request is then sent to a server to be processed"
    + " and the server will send back a response to the client. Uses Gradle",
    image: "/Projects/Schedule.png",
    link: "https://github.com/YanShek/JavaServer"
  },
  {
    id:3,
    name: "Personal Website",
    description: "The website you are currently on. Built using React and SASS",
    image: "/website.png",
    link: "#"
  },
  {
    id:4,
    name: "Documents Classifier",
    description: "Using Naive Bayes, classify documents into binary categories. The program will learn from a training set and then classify the documents in the test set",
    image: "classify-doc.png",
    link: "https://github.com/YanShek/doc-classifier"
  }
]

const sliderVariants = {
  initial: {
    x:0
  },
  animate: {
    x:"-200%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  }
};

const textVariants = {
  initial: {
    x:-50,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition:{
      duration: 2,
      staggerChildren: 0.1
    }
  }
}


const Portfolio = () => {

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable endless scrolling
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="portfolio">
    <Navbar displayText={"Projects"}/>
    <motion.div variants={textVariants} initial="initial" whileInView="animate" viewport={{once:false, amount:0.5}} className="projects">
      <Slider {...settings}>
        {items.map((item) => (
          <Card key={item.id} name={item.name} description={item.description} image={item.image} link={item.link}/>
        ))}
      </Slider>
      <motion.h2 className='slidingText' variants={sliderVariants} initial="initial" animate="animate">
      My projects 
      </motion.h2>
    </motion.div>
    
    </div>
  )
}

export default Portfolio;
