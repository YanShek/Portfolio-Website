import React from 'react'
import './about.scss'
import "react-multi-carousel/lib/styles.css";
import { animate, motion, stagger } from 'framer-motion';


const containerVariant = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0,
    transition: { duration: 2, staggerChildren: 0.5 }
  }
}

const childVariant = {
  initial: { opacity: 0, y:-50 },
  animate: { 
    opacity: 1, y: 0,
    transition: { duration: 1 }
  }
}


const About = () => {
  return (
    <div className='about'>
      <motion.div className='wrapper' variants={containerVariant} initial="initial" whileInView="animate" viewport={{once:false, amount:0.5}}>
        <motion.div className='textContainer' variants={childVariant}>
          <h1>About me</h1>
          <hr/>
          <p>I'm a software developer who loves to create and learn new things.
            I'm currently studying Computer Science at the University of Montreal. I have experience with
            Java, Python, JavaScript, C++, React, and several little projects in the field of Machine Learning.
            I'm always looking for new opportunities to learn and grow as a developer.</p>
        </motion.div>
        <motion.div className='imageContainer' variants={childVariant}><img src='path\to\iomage'></img></motion.div>
      </motion.div>
    </div>
  )
}

export default About;
