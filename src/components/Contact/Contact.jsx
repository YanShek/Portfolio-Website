import React from 'react'
import Navbar from '../navbar/Navbar';
import './contact.scss'
import {motion} from 'framer-motion'

const textVariants = {
  initial: {
    y: -70,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 1.5,
      staggerChildren: 4
    }
  }
}

const sliderVariants = {
  initial: {
    x:0
  },
  animate: {
    x:"-200%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    }
  }
};

const Contact = () => {
  return (
    <div>
    <Navbar displayText={"Contact"} />
    <div className='contact'>
        <motion.div variants={textVariants} initial="initial" whileInView="animate" viewport={{once:false, amount:0.3}} className="container">
            <motion.h2>Contact Me</motion.h2>
            <motion.div className='verticalLine'></motion.div>
            <motion.div className='contactMethods'>
                <a href="mailto:yanshek1123@gmail.com" className='email'><img src='email.svg'/></a>
                <a href="https://www.linkedin.com/in/yan-shek-609369309" target="_blank"><img src="/LinkedIn_icon.svg" alt="LinkedIn"/></a>
            </motion.div>
        </motion.div>
        <motion.div className='slider' variants={sliderVariants} initial="initial" animate="animate"><h2>Contact Me</h2></motion.div>
      </div>
    </div>
  )
}

export default Contact;
