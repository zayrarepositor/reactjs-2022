import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import CounterScreen from '../../components/CounterScreen/CounterScreen';
import ImgCard from '../../components/ImgCard/ImgCard';
import './Counter.css';

const Counter = () => {
  const [clicksNumb, setClickNumb] = useState(1);

  const imgLink='https://img.wikioo.org/ADC/Art-ImgScreen-1.nsf/O/A-5ZKEPT/$FILE/Salvador-dali-the-face-of-war.Jpg'

  const handleLike = () => {
    setClickNumb(clicksNumb + 1);
  };
  const handleReset = () => {
    setClickNumb(1);
  };
  return (
    <div className='counter'>
      <ImgCard title={'Counting faces'} link={imgLink} description={'El Rostro de la Guerra - Salvador Dali (1940)'} color={'light'} />

      <div className='counter-container'>
        <CounterScreen
          text='How many faces can you count?'
          clicks={clicksNumb}
        />
        <Button text='add' click={true} handleClick={handleLike} />
        <Button text='refresh' click={false} handleClick={handleReset} />
      </div>
    </div>
  );
};

export default Counter;
