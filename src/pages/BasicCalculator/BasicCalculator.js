import React from 'react';
import Calculator from '../../components/Calculator/Calculator';
import ImgCard from '../../components/ImgCard/ImgCard';
import './BasicCalculator.css';

const BasicCalculator = () => {
  const imgLink ='https://media.istockphoto.com/photos/business-woman-using-calculator-to-manage-finance-picture-id1308840590?b=1&k=20&m=1308840590&s=612x612&w=0&h=vjjJwxI9qq5kPzjh80WGaiFj2cfwBiJ9Lil12_5qQ44='

  return (
    <div className='calculator'>
      <ImgCard title={'Calculator'} link={imgLink} color={'light'} shape={'circle'} />
      <Calculator />
    </div>
  );
};

export default BasicCalculator;
