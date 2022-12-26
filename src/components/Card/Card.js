import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='card-img' src={props.image} alt={`${props.id}`} />
      <div className='card-text-container'>
        <p className='card-title'>{props.name}</p>
        <p className='card-subtitle'>{props.occupation}</p>
        <p className='card-info'>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
