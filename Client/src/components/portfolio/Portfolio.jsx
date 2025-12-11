import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Navbar from '../navbar/Navbar';
import { motion } from 'framer-motion';


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

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    fetchProjects();
  }, []);

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
        {projects.map((project) => (
          <Card key={project.id} name={project.name} description={project.description} image={project.image} link={project.link}/>
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
