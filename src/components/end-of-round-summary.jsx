import React, { useState } from 'react';
import mudCrab from '../assets/imgs/crabs/mud-crab.jpg';
import blueCrab from '../assets/imgs/crabs/blue-crab.jpg';
import purpleCrab from '../assets/imgs/crabs/purple-crab.jpg';
import ghostCrab from '../assets/imgs/crabs/ghost-crab.jpg';
import goldCrab from '../assets/imgs/crabs/gold-crab.jpg';
import jadeCrab from '../assets/imgs/crabs/jade-crab.jpg';
import tickImage from '../assets/imgs/icons/tick-image.png';
import coinImage from '../assets/imgs/icons/coin-image.png';

import { allPowers } from './powers';

export default function EndOfRoundSummary({ players, gameState, closeModal, newDay, newGame, setPowerAttributes, powerAttributes, setPlayers }) {
  const [modalProgressed, setModalProgressed] = useState(false);
  

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

  const penalisedCrabs = players.crabs.filter((crab) => selectCrabImage(crab) !== selectCrabImage(gameState.crabDeJour[0]) )
  const overCrabbingPenalty = penalisedCrabs.reduce((a, b) => a + b, 0)
  const crabDeJoursImages = players.crabs.filter((crab) => selectCrabImage(crab) === selectCrabImage(gameState.crabDeJour[0]) )
  const crabDeJoursTotal =  (crabDeJoursImages.reduce((a, b) => (a + b), 0)) * powerAttributes.cdjBonus
  const totalCoins =  (Number(players.coins) + Number(crabDeJoursTotal)) - Number(overCrabbingPenalty)


  const closeAndSetNewDay = (power) => {
    console.log('new day')
    power.effect(setPowerAttributes)
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      powers: [...prevPlayers.powers, power]
    }));
    console.log(players.powers)
  
    newDay()
    console.log(powerAttributes)
    closeModal()
  }

  const closeAndSetNewGame = () => {
    console.log('new Game')
    closeModal()
    newGame()
  }

  const getRandomPowers = (allPowers, numCards) => {
    const result = [];
    const usedIndexes = new Set();
  
    while (result.length < numCards) {
      const randomIndex = Math.floor(Math.random() * allPowers.length);
  
      // Check if the index has already been used
      if (!usedIndexes.has(randomIndex)) {
        result.push(allPowers[randomIndex]);
        usedIndexes.add(randomIndex); // Add the index to the set of used indexes
      }
    }
  
    return result;
  };
  

  // const generateUniqueRandomNumbers = (min, max, count) => {
  //   const numbers = new Set();
  //   while (numbers.size < count) {
  //     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  //     numbers.add(randomNum);
  //   }
  //   return Array.from(numbers);
  // };
  
  

  return (
    <div>
      {modalProgressed ? (
        <div className='modal-progressed-container'>
          
          <h3>Day {gameState.day +1}</h3>
          <p>Sterling work m'lad! I've found some things out the back which might help us reach our target. Take your pick!</p>
          <h4>Select a power to start the day</h4>
          <div className="power-selection-container">
          {getRandomPowers(allPowers, powerAttributes.numOfPowers).map((power, idx) =>
             
             <div 
             className='power-container'
             onClick={() => closeAndSetNewDay(power)}
            
             key={idx}>
                <h3>{power.title}</h3>
                <img src={power.img}></img>
                <p>{power.description}</p>
                
                
              </div>
                
                )}
                </div>


          {/* <button onClick={() => closeAndSetNewDay()}>Start Day {gameState.day +1}</button> */}

        
        
        </div>
      ) : (
        <div className="summary-modal">
          <h2>End of Day {gameState.day} Summary</h2>
          <p>
            End of Day Coins: {players.coins}{' '}
            <img className="summary-coin" src={coinImage} alt="coin" />
          </p>
          <p>
            Crab De Jour Bonus: {crabDeJoursTotal}{' '}
            <img className="summary-coin" src={coinImage} alt="coin" />
          </p>
          <div className="summary-crabs">
            {crabDeJoursImages.map((crab, index) => (
              <img
                className="tank-crab"
                key={index}
                src={selectCrabImage(crab)}
                alt="crab"
              />
            ))}
          </div>
          <p>
            Over Crabbing Penalty: -{overCrabbingPenalty}{' '}
            <img className="summary-coin" src={coinImage} alt="coin" />
          </p>
          <div className="summary-crabs">
            {penalisedCrabs.map((crab, index) => (
              <img
                className="tank-crab"
                key={index}
                src={selectCrabImage(crab)}
                alt="crab"
              />
            ))}
          </div>
          <p>
            Total Coins: {totalCoins}{' '}
            <img className="summary-coin" src={coinImage} alt="coin" />
          </p>
          {totalCoins >= gameState.requiredCoins ? (
            <>
              <p>Well done m'lad we've hit our quota for the day</p>
              <button onClick={() => setModalProgressed(true)}>
                Start Next Day
              </button>
            </>
          ) : (
            <>
              <p>
                A sorry sight to behold; we didn't hit our target so our days of
                crabbing are over m'lad.
              </p>
              <button onClick={() => closeAndSetNewGame()}>Play Again</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
