import React from 'react'
import './about.scss'
import "react-multi-carousel/lib/styles.css";
import { animate, motion, stagger } from 'framer-motion';

const container = {
  initial: {
    opacity: 0,
    y: -500
  },
  animate: {
    opacity: 1,
    y: -50,
    transition: {
      duration: 2,
      staggerChildren: 0.1
    }
  }
}

const About = () => {

  return (
    <div className='about'>
      
      <motion.div variants={container} initial="initial" animate="animate" className='wrapper'>
        <motion.div className='textContainer'>
          <h1>About me</h1>
          <hr />
          <p>I'm a software developer who loves to create and learn new things.
            I'm currently studying Computer Science at the University of Montreal. I have experience with
            Java, Python, JavaScript, C++, React, and several little projects in the field of Machine Learning.
            I'm always looking for new opportunities to learn and grow as a developer.</p>
        </motion.div>
        <div className='imageContainer'></div>
      </motion.div>
    </div>
  )
}

export default About;
