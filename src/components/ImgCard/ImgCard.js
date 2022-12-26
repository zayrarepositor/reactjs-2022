import React from 'react';
import './ImgCard.css';
const ImgCard = ({ title, link, description, color, shape }) => {
  return (
    <div className='imgcard-container'>
      <h2 className={`imgcard-title ${color === 'light' ? 'light' : 'dark'}`}>
        {title}
      </h2>
      <img
        className={`imgcard-img ${
          shape === 'circle' ? 'circle' : ''
        }`.trimEnd()}
        src={link}
        alt={`${title}`}
      />
      <p className='imgcard-description'>{description}</p>
    </div>
  );
};

export default ImgCard;
