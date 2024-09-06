import React from 'react'
import './portfolio.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    id:1,
    name: "Uneral Image Recognition",
    description: "A game using Unreal Engine 4 and TensorFlow to recognize handrawn images and letters ofr the purpose of" 
    + "hangman and guess the drawing",
    image: "public/Projects/UnrealAI.png"
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
                <div>
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
