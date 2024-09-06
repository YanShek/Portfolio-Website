import React from 'react'
import './About.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    name: "Uneral Image Recognition",
    description: "A game using Unreal Engine 4 and TensorFlow to recognize handrawn images and letters ofr the purpose of" 
    + "hangman and guess the drawing",
  image: "public\Projects\UnrealAI.png"
  }
]

const About = () => {

  return (
    <div className="about"> </div>
  )
}

export default About;
