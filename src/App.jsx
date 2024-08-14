import { useState, useContext, createContext, useEffect } from 'react';
import Tide from './components/tide';
import TankAndOrders from './components/tank-and-orders';
import Rockpool from './components/rockpool';
import Shop from './components/shop';
import PlayerHand from './components/player-hand';
import PlayerStats from './components/playerStats';
import CatchLog from './components/catchLog' ; 
import GameController from './components/gameController';
import { allCards } from './components/card-types.js'
import RoundCounter from './components/round-counter';

import coinSound from './assets/sound/coin.mp3'
import successSound from './assets/sound/success.mp3'

import './App.css';

// import coinSound from './path/to/coin-sound.mp3'; // Import your sound file







function App() {










// use effect to trigger modal state change upon change to gameState.day


  // changed active pools to array of objects
  const [activePools, setActivePools] = useState([
    {poolPosition: 1, poolDifficulty: 1, rollSuccess: undefined},
    {poolPosition: 2, poolDifficulty: 2, rollSuccess: undefined},
    {poolPosition: 3, poolDifficulty: 3, rollSuccess: undefined},
    {poolPosition: 4, poolDifficulty: 4, rollSuccess: undefined},
    {poolPosition: 5, poolDifficulty: 5, rollSuccess: undefined},
    {poolPosition: 6, poolDifficulty: 6, rollSuccess: undefined},
  ])


  
  

  const [displayToggle, setDisplayToggle] = useState('rockpool')

  const [locked, setLocked] = useState(false)
  const [hasCaught, setHasCaught] = useState(false)

  
  
  
  

  const getRandomCards = (allCards, numCards) => {
    const result = [];
    const usedIds = new Set(); // To keep track of used IDs

    while (result.length < numCards) {
        const randomIndex = Math.floor(Math.random() * allCards.length);
        let newId;

        // Ensure the new ID is unique
        do {
            newId = Math.floor(Math.random() * 100000);
        } while (usedIds.has(newId));

        usedIds.add(newId); // Mark this ID as used

        const selectedCard = { ...allCards[randomIndex], id: newId };
       
        result.push(selectedCard);
        
    }

    return result;
};


  
  const randomCards = getRandomCards(allCards, 9);
  
  const [shop, setShop] = useState(randomCards)
  
 


  const [players, setPlayers] = useState(
    {
   
    coins : 5,
    heldCards : [],
    activeCards : [],
    crabs : [],
    trash : [],
    orders: [[2,4,5,], [2, 2, 2]],
    currentModifier : 0,
    selectedPools:[],
    catchLog : [],
    powers : [],
    
    // activePlayer : false,

    }
    );


    const [gameState, setGameState] = useState(
      {
        day: 1, 
        crabDeJour: [4], 
        roundNumber: 1,
        requiredCoins: 15,
        gameLost: false 



      }
    )

    // attributes that can be affected by powers

    const [powerAttributes, setPowerAttributes] = useState(
      {
        startingCoins: 5, 
        cdjBonus: 2,
        trashBonus: 1, 
        numOfPowers: 3

      }
    )


    
    useEffect(() => {
      // This effect will run every time players.coins changes
      const audio = new Audio(coinSound);
      if (players.coins > 5) { // Check to prevent sound playing on initial render
        audio.play();
      }
    }, [players.coins]);

    useEffect(() => {
      // This effect will run every time players.coins changes
      const audio = new Audio(successSound);
      if (players.crabs > 0) { // Check to prevent sound playing on initial render
        audio.play();
      }
    }, [players.crabs]);
  
    
   

      // game state 
      // round state
      // controller component 

  
    
  
  return (
    <>
              
   

    <PlayerStats 
          players={players}
          gameState={gameState} />
      <div className='header-container'>
      
      <RoundCounter 
      gameState={gameState} />
      

      <div className='header-btn-container'>    
      
      <button onClick={() => setDisplayToggle('rockpool')}
      className={displayToggle === 'rockpool' ? "disabled-btn" : "active-btn"}
      >  
      See Rockpools
      </button>

      <button onClick={() => setDisplayToggle('shop')}
      className={displayToggle === 'shop' ? "disabled-btn" : "active-btn"}>  
      See Shop 
      </button>

      

      <GameController 
    gameState = {gameState}
    setGameState={setGameState}
    locked = {locked}
    setLocked={setLocked}
    players={players}
    setPlayers={setPlayers}
    hasCaught={hasCaught}
    setHasCaught={setHasCaught}
    activePools= {activePools}
    setActivePools={setActivePools}
    shop={shop}
    setShop={setShop}
    powerAttributes = {powerAttributes}
    setPowerAttributes = {setPowerAttributes}
    
   
    
    />
      
      </div>

   

      
      </div>
      

      <div className="container">

          <div className="center-content-container">

          <div className='catch-log-container'>
          <CatchLog
          players={players} />
          </div>

          <div className="shop-pools-container" style={{display: displayToggle === 'rockpool' ? 'block' : 'none' }}>
          <Rockpool
          players={players}
          setPlayers={setPlayers}
          activePools={activePools} 
          />

          </div>

          <div className="shop-pools-container" style={{display: displayToggle === 'shop' ? 'block' : 'none' }}>
          <Shop
          shop={shop}
          setShop={setShop}
          players={players}
          setPlayers={setPlayers} 
          /> 
          </div>

          <div className='right-container'>
          
          <TankAndOrders
          players={players}
          setPlayers={setPlayers} 
          gameState={gameState}
          powerAttributes={powerAttributes}
          />
          </div>
          
          </div>
          
          <PlayerHand 
          players={players}
          setPlayers={setPlayers} 
          />

          

          
      
      </div>
    </>
  );
}

export default App;

