import React from 'react';
import trashImage from '../assets/imgs/crabs/sea-trash.png';
// import crabImage from '../assets/imgs/crabs/pixel-crab.png';
import mudCrab from '../assets/imgs/crabs/mud-crab.jpg';
import blueCrab from '../assets/imgs/crabs/blue-crab.jpg';
import purpleCrab from '../assets/imgs/crabs/purple-crab.jpg';
import ghostCrab from '../assets/imgs/crabs/ghost-crab.jpg';
import goldCrab from '../assets/imgs/crabs/gold-crab.jpg';
import jadeCrab from '../assets/imgs/crabs/jade-crab.jpg';

export default function Pool({ onClick, pool, className }) {
  const handleClick = () => {
    onClick(pool); // Call the onClick callback with the pool as argument
  };

  const selectCrabImage = (rollSuccess, poolDifficulty) => {
    if (rollSuccess) {
      switch (poolDifficulty) {
        case 1:
        case 2:
          return mudCrab;
        case 3:
        case 4:
          return blueCrab;
        case 5:
        case 6:
          return purpleCrab;
        case 7:
        case 8:
          return ghostCrab;
        case 9:
        case 10:
          return goldCrab;
        case 11:
        case 12:
          return jadeCrab;
        default:
          return null;
      }
    }
    return trashImage;
  };

  return (
    <div className={className} onClick={handleClick}>
      {pool.rollSuccess === undefined ? pool.poolDifficulty : null}
      {pool.rollSuccess !== undefined && (
        <img
          className='catch-image'
          src={selectCrabImage(pool.rollSuccess, pool.poolDifficulty)}
          alt="Crab or trash"
        />
      )}
    </div>
  );
}
