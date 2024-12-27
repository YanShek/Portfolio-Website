import './card.scss'

const Card = ({ name, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href={link} target='_blank'>Learn More</a>
      </div>
    </div>
  );
};

export default Card;  