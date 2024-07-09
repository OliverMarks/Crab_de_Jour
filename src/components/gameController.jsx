
import { useState } from 'react';


export default function GameController ({locked, setLocked, players, setPlayers, hasCaught, setHasCaught, roundNumber, setRoundNumber, setActivePools}) {


    const lockInHand = () => {
        // map over active cards and trigger their effect
    players.activeCards.map(card => card.effect(setPlayers));
    
    // alert the player if they havent selected their pools yet 
    if (players.selectedPools.length !== 2) {
        alert('Please select 2 pools to catch in')
        setLocked(false)
    } else {
    // disable the locked btn to prevent effects applying more than once
    setLocked(true)
    }
    }


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
        // dice rolls
        const roll1 = 1 + Math.floor(Math.random() * 6);
        const roll2 = 1 + Math.floor(Math.random() * 6);
        let crabs = 0;
        let trash = 0;
        // test dice roll 1
        setTimeout(() => {

        if (roll1 + players.currentModifier >= players.selectedPools[0]) {
            const success1 = `Catch roll 1: Required ${players.selectedPools[0]}, Roll: ${roll1}, Modifiers: ${players.currentModifier} Result: Wowzers, you rolled you got a crab!`;
            crabs++;
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                catchLog: [...prevPlayers.catchLog, success1]
            }));
            updateRollSuccess(players.selectedPools[0], true)
        } else {
            const fail1 = `Catch roll 1: Required ${players.selectedPools[0]}, Roll: ${roll1}, Modifiers: ${players.currentModifier} Result: hard luck, no crab`;
            trash++;
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                catchLog: [...prevPlayers.catchLog, fail1]
            }));
            updateRollSuccess(players.selectedPools[0], false)
        } 
        console.log(crabs)

    }, 1000)


        // test dice roll 2
        // set a timeout? 
        setTimeout(() => {

        if (roll2 + players.currentModifier >= players.selectedPools[1]) {
            const success2 = `Catch roll 2: Required ${players.selectedPools[1]}, Roll: ${roll2}, Modifiers: ${players.currentModifier} Result: Wowzers, you rolled you got a crab!`;
            crabs++;
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                catchLog: [...prevPlayers.catchLog, success2]
            }));
            updateRollSuccess(players.selectedPools[1], true)
        } else {
            const fail2 = `Catch roll 2: Required ${players.selectedPools[1]}, Roll: ${roll2}, Modifiers: ${players.currentModifier} Result: hard luck, no crab`;
            trash++;
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                catchLog: [...prevPlayers.catchLog, fail2]
            }));
            updateRollSuccess(players.selectedPools[1], false)
        }
        console.log(crabs)
    }, 2000)

            // update players crabs and coins and generate the summary 
        
            setTimeout(() => {
                const updatedCrabs = Number(players.crabs) + Number(crabs);
                const updatedCoins = players.coins + trash;
                const catchingSummary = trash > 0 
                    ? `Round ${roundNumber} Summary: Not a bad day's work, you caught ${crabs} crabs and ${trash} trash which was recycled for Coins!` 
                    : `Round ${roundNumber} Summary: Not a bad day's work, you caught ${crabs} crabs!`;
            
                setPlayers(prevPlayers => ({
                    ...prevPlayers,
                    crabs: updatedCrabs,
                    coins: updatedCoins,
                    catchLog: [...prevPlayers.catchLog, catchingSummary]
                }));
            
                console.log(crabs);
            }, 3000);
            

        // disable the catch btn for the turn
        setHasCaught(true)
    };



    const nextRound = () => {
        // reset the players state for new round. 
        setPlayers({
            ...players,
            currentModifier : 0,
            selectedPools:[],
            activeCards: [], 
          });
        // reset the buttons
          setHasCaught(!hasCaught)
          setLocked(!locked)

          setRoundNumber(roundNumber + 1) 

          setActivePools(prevPools => 
            prevPools.map(pool => ({
            ...pool, rollSuccess: undefined
            })
            )
        )

    }


    return (

        <div className='gameController-buttons'>
            <button 
                onClick={() => {lockInHand()}}
                disabled = {locked}>
                    LockIn
            </button>
            
            <button 
                onClick={() => {crabbingRolls()}}
                disabled={(!locked || players.selectedPools.length !== 2 || hasCaught) ? true : false}>
                Let's go Crabbing!
            </button>

            <button 
                onClick={() => {nextRound()}}
                disabled = {locked && hasCaught ? false : true}>
                    Next Round!
            </button>

                    </div>



    )
}