import React from 'react';
import Card from '../../components/Card/Card';
import { painters } from './paintersInfo';
import './Painters.css';

const Painters = () => {
  return (
    <div className='painters'>
      <div className='cards-container'>
        <h1 className='painters-title'>Pintores</h1>
        {painters.map((painter) => {
          return (
            <Card
              key={painter.id}
              image={painter.image}
              name={painter.name}
              occupation={painter.occupation}
              description={painter.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Painters;
