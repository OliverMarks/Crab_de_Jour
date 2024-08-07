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


import './App.css';







function App() {




// array dis 





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
    while (result.length < numCards) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      result.push(allCards[randomIndex]);
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
    crabs : [2,4,5,8],
    trash : [],
    orders: [[2,4,5,8], [3, 3, 3]],
    currentModifier : 0,
    selectedPools:[],
    catchLog : [],
    
    // activePlayer : false,

    }
    );


    const [gameState, setGameState] = useState(
      {
        day: 1, 
        crabDeJour: [2], 
        roundNumber: 6,
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

      }
    )


    
   
    
   

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

// class Player {
  //   constructor( name, stateChange) {
  //     //pass in the same shop to all players so they all work from the same list
  //     // this.shop = shop;
  //     //can do any other dynamic setting up of the properties you want in here
  //     this.name = name;
  //     this.stateChange = stateChange
  //   }

  //   coins = 5;
  //   name = 'crabber';
  //   heldCards = [{type: 'bait', title: 'Worm', img: wormImage, description: '+1 to your catch roll this turn', cost: 1, cardEffect: (player) => player.currentModifier++},
  //   {type: 'companion', title: 'Different Worm', img: wormImage, description: '+1 to all catch rolls', cost: 3, cardEffect: (player) => player.currentModifier++} ];
  //   activeCards = [];
  //   crabs = [];
  //   trash = [];
  //   currentModifier = 0;
  //   activePlayer = false;
    
  //   // shop;
  
    
  
  //   // buyCard(card) {
  //   //   if (card.cost <= this.coins) {
  //   //     this.coins -= card.cost;
  //   //     this.heldCards.push(card);
  //   //     this.shop.replaceCard(card);
  //   //   }
  //   // }
  
  
  //   playCard(card) {
  //     console.log(true)
  //     let index = this.heldCards.findIndex((activeCard) => activeCard.title === card.title);
  //     this.heldCards.splice(index, 1);
  //     this.activeCards.push(card);
  //     setStateChange(prevState => prevState + 1);
  //   }
  // }

//   const players = [new Player('Oly', stateChange), new Player('Jade', stateChange)];
// players[0].activePlayer = true;

 // {
    // name : 'crabber',
    // coins : 5,
    // heldCards : [{type: 'bait', title: 'Worm', img: wormImage, description: '+1 to your catch roll this turn', cost: 1, cardEffect: (player) => player.currentModifier++},
    // {type: 'companion', title: 'Different Worm', img: wormImage, description: '+1 to all catch rolls', cost: 3, cardEffect: (player) => player.currentModifier++} ],
    // activeCards : [],
    // crabs : [],
    // trash : [],
    // currentModifier : 0,
    // activePlayer : true
    // }
