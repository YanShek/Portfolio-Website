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
          <p>I'm currently studying Computer Science at the University of Montreal. I have experience with
            many languages, mainly Java and Python. I have multiple projects in the field of Machine Learning and Data Science. However, I would consider myself quite skilled 
            in logical programming as I have completed multiple LeetCode challenges.
            I'm always looking for new opportunities to learn and grow in the field of Computer Science.</p>
        </motion.div>
        <motion.div className='imageContainer' variants={childVariant}><img src='Montage_YAN_B&W_001.jpg'></img></motion.div>
      </motion.div>
    </div>
  )
}

export default About;
