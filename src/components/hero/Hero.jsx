
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x:-500,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y:10,
    transition:{
      yoyo: Infinity,
      duration: 1.5,
      repeat: Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x:0
  },
  animate: {
    x:"-220%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  }
};

const Hero = () => {
  return (
    <div className="hero">
    <div className="wrapper">
      <motion.div className="textContainer" 
        variants={textVariants} 
        initial="initial" 
        whileInView="animate"
        viewport={{once:false, amount:0.5}}>

        <motion.h2 variants={textVariants}>Yan Shek</motion.h2>
        <motion.h1 variants={textVariants}>Welcome to my Site</motion.h1>
        <motion.div className="buttons" variants={textVariants}>
          <button onClick={() => { window.location.href = '#Portfolio'; }}>My projects</button>
          <button>Contact me</button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      <motion.div className="slidingTextContainer" 
        variants={sliderVariants} initial="initial" animate="animate" whileInView="animate" viewport={{once:false, amount:0.5}}>
        Yan Shek
      </motion.div>
      <div className="imageContainer">
        <img src="/Hero1.png" alt="" />
      </div>
      </div>
    </div>
  )

}

export default Hero;