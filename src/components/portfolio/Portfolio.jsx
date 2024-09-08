import React from 'react'
import './portfolio.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Portfolio = () => {

  return (
    <div className="projects"> 
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
    </div>
  )
}

export default Portfolio;
