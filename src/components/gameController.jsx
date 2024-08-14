import { useEffect, useState } from 'react';
import Modal from './Modal';
import EndOfRoundSummary from './end-of-round-summary';
import { allCards } from './card-types.js'

export default function GameController({
  locked, setLocked, players, setPlayers, hasCaught, setHasCaught, 
  gameState, setGameState, activePools, setActivePools, shop, setShop, powerAttributes, setPowerAttributes
}) {

const [welcomeModal, setWelcomeModal] = useState(true);
const [endOfDayModal, setEndOfDayModal] = useState(false);

  const lockInHand = () => {
    players.activeCards.map(card => card.effect(setPlayers));
    
    if (players.selectedPools.length !== 2) {
      alert('Please select 2 pools to catch in');
      setLocked(false);
    } else {
      setLocked(true);
    }
  };


  // useEffect(() => {
    
  // }, [players.activeCards]);
  

  const generateUniqueRandomNumbers = (min, max, count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNum);
    }
    return Array.from(numbers);
  };

  const updatePoolDifficulties = () => {
    const uniqueRandomNumbers = generateUniqueRandomNumbers(1, 12, activePools.length);
    const updatedPools = activePools.map((pool, index) => ({
      ...pool,
      poolDifficulty: uniqueRandomNumbers[index],
    }));
    setActivePools(updatedPools);
  };

  const crabbingRolls = () => {
    const updateRollSuccess = (poolDifficulty, success) => {
      setActivePools(prevPools => 
        prevPools.map(pool => 
          pool.poolDifficulty === poolDifficulty 
            ? { ...pool, rollSuccess: success } 
            : pool
        )
      );
    };

    const roll1 = 1 + Math.floor(Math.random() * 6);
    const roll2 = 1 + Math.floor(Math.random() * 6);
    let caughtCrabs = [];
    let crabs = 0;
    let trash = 0;

    setTimeout(() => {
      if (roll1 + players.currentModifier >= players.selectedPools[0]) {
        const success1 = `Catch roll 1: Required ${players.selectedPools[0]}, Roll: ${roll1}, Modifiers: ${players.currentModifier} Result: Wowzers, you got a crab!`;
        crabs++;
        caughtCrabs.push(players.selectedPools[0]);
        setPlayers(prevPlayers => ({
          ...prevPlayers,
          catchLog: [...prevPlayers.catchLog, success1]
        }));
        updateRollSuccess(players.selectedPools[0], true);
      } else {
        const fail1 = `Catch roll 1: Required ${players.selectedPools[0]}, Roll: ${roll1}, Modifiers: ${players.currentModifier} Result: Hard luck, no crab`;
       trash += Number(powerAttributes.trashBonus);
       console.log(trash)
        setPlayers(prevPlayers => ({
          ...prevPlayers,
          catchLog: [...prevPlayers.catchLog, fail1]
        }));
        updateRollSuccess(players.selectedPools[0], false);
      }
    }, 1000);

    setTimeout(() => {
      if (roll2 + players.currentModifier >= players.selectedPools[1]) {
        const success2 = `Catch roll 2: Required ${players.selectedPools[1]}, Roll: ${roll2}, Modifiers: ${players.currentModifier} Result: Wowzers, you got a crab!`;
        caughtCrabs.push(players.selectedPools[1]);
        crabs++;
        setPlayers(prevPlayers => ({
          ...prevPlayers,
          catchLog: [...prevPlayers.catchLog, success2]
        }));
        updateRollSuccess(players.selectedPools[1], true);
      } else {
        const fail2 = `Catch roll 2: Required ${players.selectedPools[1]}, Roll: ${roll2}, Modifiers: ${players.currentModifier} Result: Hard luck, no crab`;
        trash += Number(powerAttributes.trashBonus);
        setPlayers(prevPlayers => ({
          ...prevPlayers,
          catchLog: [...prevPlayers.catchLog, fail2]
        }));
        updateRollSuccess(players.selectedPools[1], false);
      }
    }, 2000);

    setTimeout(() => {
      const updatedCrabs = Number(players.crabs) + Number(crabs);
      const updatedCoins = Number(players.coins) + Number(trash);
      const catchingSummary = trash > 0 
        ? `Round ${gameState.roundNumber} Summary: Not a bad day's work, you caught ${crabs} crabs and ${trash} trash which was recycled for Coins!` 
        : `Round ${gameState.roundNumber} Summary: Not a bad day's work, you caught ${crabs} crabs!`;
    
      setPlayers(prevPlayers => ({
        ...prevPlayers,
        crabs: [...prevPlayers.crabs, ...caughtCrabs],
        coins: updatedCoins,
        catchLog: [...prevPlayers.catchLog, catchingSummary]
      }));
    }, 3000);

    setHasCaught(true);
  };

  const nextRound = () => {
    setPlayers({
      ...players,
      currentModifier: 0,
      selectedPools: [],
      activeCards: [], 
    });

    setHasCaught(false);
    setLocked(false);

    setGameState(prevState => ({
      ...prevState,
      roundNumber: prevState.roundNumber + 1
    }));

    updatePoolDifficulties();
    setActivePools(prevPools => 
      prevPools.map(pool => ({
        ...pool, rollSuccess: undefined
      }))
    );
  };

  const endDay = () => {
    setTimeout(() => {
    console.log('day end');
    setEndOfDayModal(true);
  }, 2000);
  };

  const newGame = () => {
    setPlayers({
      coins: 5,
      heldCards: [],
      activeCards: [],
      crabs: [2, 4, 5, 8],
      trash: [],
      orders: [[2,4,5,8], [3, 3, 3]],
      currentModifier: 0,
      selectedPools: [],
      catchLog: [],
      activePowers: []
    });

    setGameState({
      day: 1,
      crabDeJour: 2,
      cdjBonus: 2,
      roundNumber: 1,
      requiredCoins: 15,
      gameLost: false
    });

    setActivePools([
        {poolPosition: 1, poolDifficulty: 1, rollSuccess: undefined},
        {poolPosition: 2, poolDifficulty: 2, rollSuccess: undefined},
        {poolPosition: 3, poolDifficulty: 3, rollSuccess: undefined},
        {poolPosition: 4, poolDifficulty: 4, rollSuccess: undefined},
        {poolPosition: 5, poolDifficulty: 5, rollSuccess: undefined},
        {poolPosition: 6, poolDifficulty: 6, rollSuccess: undefined},
      ])

      setShop(getRandomCards(allCards, 9))

      setLocked(false)
    
  };

  const newDay = () => {

    setPlayers(prevPlayers => ({
      ...prevPlayers,
      coins: powerAttributes.startingCoins,
      heldCards: [],
      activeCards: [],
      crabs: [],
      trash: [],
      orders: generateNewOrders(1, 12, 4),
      currentModifier: 0,
      selectedPools: [],
      catchLog: [],
    }));
   

    setGameState(prevState => ({
      ...prevState,
      day: prevState.day + 1,
      crabDeJour: generateUniqueRandomNumbers(1, 12, 1),
      
      roundNumber: 1,
      requiredCoins: generateRequiredCoins(gameState.day),
      gameLost: false
    }));

    updatePoolDifficulties();
    setActivePools(prevPools => 
      prevPools.map(pool => ({
        ...pool, rollSuccess: undefined
      }))
    );

    setShop(getRandomCards(allCards, 9))
    setHasCaught(false);
    setLocked(false)
  };


  const generateRequiredCoins = (day) => {
        return 15 * (day + 1)
  }

  const generateNewOrders = (min, max, maxCount) => {
    const generateArray = (count) => {
      const numbers = [];
      for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);
      }
      return numbers;
    };
    
    const length1 = Math.floor(Math.random() * maxCount) + 1; // Random length between 1 and maxCount
    const length2 = Math.floor(Math.random() * maxCount) + 1; // Random length between 1 and maxCount
    
  
    const array1 = generateArray(length1);
    const array2 = generateArray(length2);
  
    return [array1, array2];
  };
    
  const getRandomCards = (allCards, numCards) => {
    const result = [];
    while (result.length < numCards) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      result.push(allCards[randomIndex]);
    }
    return result;
  };
  
  




  return (
    <>
      {gameState.roundNumber === 1 && gameState.day === 1 ? (
        <Modal openModal={welcomeModal}>
          <div className="modal-content">
            <h3>Welcome to Crab de Jour</h3>
            <section>
              Ahoy there young crabber! All hands on nets we're a man short and have lots of orders to fulfill. I'm gonna need you down at the{' '}
              <div className="tooltip">
                RockPools <span className="tooltiptext">Click on a rockpool to crab in, you must select 2</span>
              </div>{' '}
              sharpish to pull them in. Things are pretty tight cashflow wise at the moment so We'll need to make 15{' '}
              <div className="tooltip">
                Coins <span className="tooltiptext">Coins are earned by completing orders or catching the Crab de Jour. You will earn 1 Coin if you fail a catch and recycle the trash caught</span>
              </div>{' '}
              to make it to tomorrow.
            </section>
            <section>
              Remember to stock up on <div className="tooltip">
              Bait <span className="tooltiptext">Bait can be bought in the shop and will enhance your chance of success when trying to catch a crab</span> </div>{' '} at the shop to make things easier and keep an eye out for your chance to catch the <div className="tooltip">
                Crab de Jour <span className="tooltiptext">Each day one crab will be worth x2 - this multiplier can be enhanced</span>
              </div>{' '}! Oh and try to be careful what you catch...
              anything we can't use for orders or that isn't the crab de jour will cost us at the end of the day.
            </section>
            <section>Godspeed and happy crabbing me'lad</section>
            <button onClick={() => setWelcomeModal(false)}>Start Day 1</button>
          </div>
        </Modal>
      ) : (
        <Modal openModal={endOfDayModal}>
          <div className="modal-content">
            <EndOfRoundSummary 
              players={players} 
              gameState={gameState} 
              newDay={newDay} 
              newGame={newGame} 
              closeModal={() => setEndOfDayModal(false)} 
              setPowerAttributes={setPowerAttributes}
              powerAttributes={powerAttributes}
              setPlayers={setPlayers}
            />
          </div>
        </Modal>
      )}

      <div className='gameController-buttons'>
        <button onClick={lockInHand} disabled={locked}>
          Lock In
        </button>
        
        <button onClick={crabbingRolls} disabled={!locked || players.selectedPools.length !== 2 || hasCaught}>
          Let's go Crabbing!
        </button>

        {gameState.roundNumber !== 6 ? (
          <button onClick={nextRound} disabled={!(locked && hasCaught)}>
            Next Round!
          </button>
        ) : ( hasCaught ? 
          <button onClick={endDay} >
            End Day
          </button>
       : null )}
      </div>
    </>
  );
}
