import { useState, useContext, createContext } from 'react';
import Tide from './components/tide';
import TankAndOrders from './components/tank-and-orders';
import Rockpool from './components/rockpool';
import Shop from './components/shop';
import PlayerHand from './components/player-hand';
import PlayerStats from './components/playerStats';
import CatchLog from './components/catchLog' ; 
import GameController from './components/gameController';
import  WelcomeModal  from "./components/welcomeModal";
import RoundCounter from './components/round-counter';

import './App.css';







function App() {




// array dis 
const [modal, setModal] = useState(true);



  const [players, setPlayers] = useState(
    {
   
    coins : 5,
    heldCards : [],
    activeCards : [],
    crabs : [],
    trash : [],
    orders: [[2,4,5,8], [3, 3, 3]],
    currentModifier : 0,
    selectedPools:[],
    catchLog : [],
    activePowers:[], 
    // activePlayer : false,

    }
    );


    const [gameState, setGameState] = useState(
      {
        day: 1, 
        crabDeJour: 2, 
        roundNumber: 1,
        requiredCoins: 15,



      }
    )

      // game state 
      // round state
      // controller component 

  const [roundNumber, setRoundNumber] = useState(1)
  // changed active pools to array of objects
  const [activePools, setActivePools] = useState([
    {poolPosition: 1, poolDifficulty: 1, rollSuccess: undefined},
    {poolPosition: 2, poolDifficulty: 2, rollSuccess: undefined},
    {poolPosition: 3, poolDifficulty: 3, rollSuccess: undefined},
    {poolPosition: 4, poolDifficulty: 4, rollSuccess: undefined},
    {poolPosition: 5, poolDifficulty: 5, rollSuccess: undefined},
    {poolPosition: 6, poolDifficulty: 6, rollSuccess: undefined},
  ])


  
  const [activePlayer, setActivePLayer] = useState(0)

  const [displayToggle, setDisplayToggle] = useState('rockpool')

  const [locked, setLocked] = useState(false)
  const [hasCaught, setHasCaught] = useState(false)
    
  
  return (
    <>
              

      <WelcomeModal
      openModal={modal}
      closeModal={() => setModal(false)}
    >
      <div className="modal-content">
      <h3>Welcome to Crab de Jour</h3>
            <section>Ahoy there young crabber! All hands on nets we're a man short and have lots 
                of orders to fufill. I'm gonna need you down at the <div className="tooltip">RockPools <span className="tooltiptext">Click on a rockpool to crab in, you must select 2</span> </div> sharpish to pull them in.
                Things are pretty tight cashflow wise at the moment so We'll need to make 15 <div className="tooltip">Coins <span className="tooltiptext">Coins are earned by completing orders or catching the Crab de Jour. You will earn 1 Coin if you fail a catch and recycle the trash caught</span> </div> to make 
                it to tomorrow. </section>
                <section>
                Remember to stock up on bait at the shop to make things easier and keep an eye out 
                for your chance to catch the Crab de Jour! Oh and try to be careful what you catch...
                anything we can't use for orders or that isnt the crab de jour will cost us at the end 
                of the day.
                </section>
                <section>
                Godspeed and happy crabbing me'lad 
                </section>

                   </div>
    </WelcomeModal>
    

    <PlayerStats 
          players={players}
          gameState={gameState} />
      <div className='header-container'>
      

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

      <RoundCounter 
      gameState={gameState} />

      <GameController 
    gameState = {gameState}
    setGameState={setGameState}
    locked = {locked}
    setLocked={setLocked}
    players={players}
    setPlayers={setPlayers}
    hasCaught={hasCaught}
    setHasCaught={setHasCaught}
    roundNumber={roundNumber}
    setRoundNumber={setRoundNumber}
    activePools= {activePools}
    setActivePools={setActivePools}
    
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
          players={players}
          setPlayers={setPlayers} 
          /> 
          </div>

          <div className='right-container'>
          
          <TankAndOrders
          players={players}
          setPlayers={setPlayers} 
          gameState={gameState}
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
