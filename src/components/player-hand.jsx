
import Card from './card'
import PlayerTank from './player-tank';
import OrderCard from './order-card';
import { useEffect, useState } from 'react';


export default function PlayerHand ({players, setPlayers, locked}) {
    
    // TODO 
    // once the player has crabbed they should not be allowed to add cards to active otherwise they will lose them when going to nxt round & should not be able to click
    // active card in order to put them back in hand after being used


    const playCard = (card) => {
      if (locked) {
          alert('You have locked in already');
          return;
      }
  
      if (players.activeCards.some((activeCard) => activeCard.id === card.id)) {
          // Card is in active cards, move it back to held cards
          const updatedActiveCards = players.activeCards.filter(
              (activeCard) => activeCard.id !== card.id
          );
          const updatedHeldCards = [...players.heldCards, { ...card }]; // Clone the card
  
          setPlayers((prevPlayers) => ({
              ...prevPlayers,
              heldCards: updatedHeldCards,
              activeCards: updatedActiveCards,
          }));
      } else {
          // Card is in held cards, move it to active cards
          const updatedHeldCards = players.heldCards.filter(
              (heldCard) => heldCard.id !== card.id
          );
          const updatedActiveCards = [...players.activeCards, { ...card }]; // Clone the card
  
          setPlayers((prevPlayers) => ({
              ...prevPlayers,
              heldCards: updatedHeldCards,
              activeCards: updatedActiveCards,
          }));
      }
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