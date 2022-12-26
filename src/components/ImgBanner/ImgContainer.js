import React from 'react';
import './ImgContainer.css';
const ImgBanner = ({ link, alt }) => {
  return (
    <div className='img-container'>
      <img className='img' src={link} alt={alt} />
    </div>
  );
};

export default ImgBanner;
