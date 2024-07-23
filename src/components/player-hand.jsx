
import Card from './card'
import PlayerTank from './player-tank';
import OrderCard from './order-card';
import { useEffect, useState } from 'react';


export default function PlayerHand ({players, setPlayers, locked}) {
    
    // TODO 
    // once the player has crabbed they should not be allowed to add cards to active otherwise they will lose them when going to nxt round & should not be able to click
    // active card in order to put them back in hand after being used


    const playCard = (card) => {
       
        if (!locked) {
            if (players.activeCards.includes(card)) {
              const index = players.activeCards.findIndex((activeCard) => activeCard.title === card.title);
              const updatedActiveCards = [...players.activeCards.slice(0, index), ...players.activeCards.slice(index + 1)];
              const updatedHeldCards = [...players.heldCards, card];
          
          setPlayers({
            ...players,
            heldCards: updatedHeldCards,
            activeCards: updatedActiveCards
          });
            }
          else {
          const index = players.heldCards.findIndex((activeCard) => activeCard.title === card.title);
          const updatedHeldCards = [...players.heldCards.slice(0, index), ...players.heldCards.slice(index + 1)];
          const updatedActiveCards = [...players.activeCards, card];
          
          setPlayers({
            ...players,
            heldCards: updatedHeldCards,
            activeCards: updatedActiveCards
          });
        }
        } else {
        // stop players playing cards when they have locked in
        return alert('You have locked in already') }
      };
      
     

        

        
    

    return (
       
        
        
        
        <div className="playerHand-container">

            Active Cards
            <div className='playerHand-active' style={{border: players.activeCards.length > 0 ? 'green solid 5px' : 'none' }}>
               
            {players.activeCards.map((card, idx) =>
             
             <Card 
                key={idx}
                onClick={() => {playCard(card)}}
                card = {card}
                inHand = {true}
          
                />
                
                )}
                </div>

                Held Cards
                <div className='playerHand-held'>
                {players.heldCards.map((card, idx) => (
                <Card  
                onClick={() => {playCard(card)}}
                key={idx}
                card={card}
                inHand = {true}
                /> ))}

                

                
               
            </div>
            
           
   
        </div>
        
    )
}