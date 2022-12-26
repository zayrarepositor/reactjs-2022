import React from 'react';
import Board from '../../components/Board/Board';
import ImgBanner from '../../components/ImgBanner/ImgContainer';
import './BasicTaskBoard.css';

const BasicTaskBoad = () => {
  const imgLink =
    'https://img.freepik.com/foto-gratis/mujer-smartphone-taza-cafe_23-2148494617.jpg?w=826&t=st=1672022056~exp=1672022656~hmac=99a26f9cf7dcd2845aa9f9b74ab1f06433d607b974c9f8d25186000937d1b219';

  return (
    <div className='tasks'>
      <ImgBanner link={imgLink} alt={'tasks'} />
      <div className='tasks-container'>
        <h2 className='tasks-title'>Tasks</h2>
        <Board />
      </div>
    </div>
  );
};

export default BasicTaskBoad;
