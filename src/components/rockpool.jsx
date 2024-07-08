import Pool from './pool'
import { useState } from 'react'




export default function Rockpool ({players, setPlayers, activePools} ) {


    const addToPlayerSelectedPool = (pool) => {


        if (players.selectedPools.length === 2 ) {
            return alert('max number of selections made')
        }

        const updatedSelectedPools = [...players.selectedPools, pool];
        setPlayers({
            ...players,
            selectedPools: updatedSelectedPools
          });

    }

    return (
        <div className="rockpool-container">
        <h2>The Rockpools - Select Two Pools to Crab!</h2>
        <div className="rockpool-grid">
            
            {activePools.map((pool =>
                <Pool 
                onClick={() => {addToPlayerSelectedPool(pool.poolDifficulty)}}
                className={players.selectedPools.includes(pool.poolDifficulty) ? 'active-pool pool-container' : 'pool-container'}
                key = {pool.poolPosition}
                pool ={pool}
                players = {players}
               /> ))}
        </div>
        </div>
    )
}