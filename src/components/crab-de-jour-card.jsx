import React from 'react';
import mudCrab from '../assets/imgs/crabs/mud-crab.jpg';
import blueCrab from '../assets/imgs/crabs/blue-crab.jpg';
import purpleCrab from '../assets/imgs/crabs/purple-crab.jpg';
import ghostCrab from '../assets/imgs/crabs/ghost-crab.jpg';
import goldCrab from '../assets/imgs/crabs/gold-crab.jpg';
import jadeCrab from '../assets/imgs/crabs/jade-crab.jpg';

export default function CrabDeJourCard({ gameState }) {
  
    const selectCrabImage = (poolDifficulty) => {
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
  };


  return (
    <div>

    <h3>Crab de Jour: </h3>
    <img></img>


    Value: {gameState.crabDeJour} <img></img>



    </div>

  )


}