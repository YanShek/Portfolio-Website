import './card.scss'
import { motion } from 'framer-motion';

const Card = ({ name, description, image, link }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href={link} target='_blank'>Learn More</a>
      </div>
    </motion.div>
  );
};

export default Card;  