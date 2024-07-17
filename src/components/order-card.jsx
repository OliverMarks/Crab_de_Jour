import React from 'react';
import { useState } from 'react';
import mudCrab from '../assets/imgs/crabs/mud-crab.jpg';
import blueCrab from '../assets/imgs/crabs/blue-crab.jpg';
import purpleCrab from '../assets/imgs/crabs/purple-crab.jpg';
import ghostCrab from '../assets/imgs/crabs/ghost-crab.jpg';
import goldCrab from '../assets/imgs/crabs/gold-crab.jpg';
import jadeCrab from '../assets/imgs/crabs/jade-crab.jpg';

export default function OrderCard({ order, players, setPlayers }) {

    const [orderStatus, setOrderStatus] = useState(false)
    
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

    const fulfillOrder = (order) => {
        let playerCrabs = [...players.crabs]; 
        let orderFulfilled = true;

        for (let i = 0; i < order.length; i++) {
            const index = playerCrabs.findIndex(crab => selectCrabImage(crab) === selectCrabImage(order[i]));
            if (index === -1) {
                orderFulfilled = false;
                
            } else {
                playerCrabs.splice(index, 1); 
            }
        }

        if (orderFulfilled) {
            console.log('Order has been fulfilled');
            setPlayers({
                ...players,
                // sort out how much orders should score
                coins: [players.coins + 10,],
                crabs: playerCrabs,
            });
            setOrderStatus(true)
        } else {
            console.log('Order could not be fulfilled');
        }
    };

    return (
        <div className='order-card'>
            <h3>Order:</h3>
            {order.map((crab, index) => (
                <img src={selectCrabImage(crab)} alt={`Crab ${crab}`} key={index} />
            ))}
            <button 
            onClick={() => fulfillOrder(order)}
            disabled={orderStatus ? true : false}
            >  
                Fulfill Order</button>
            {orderStatus ? <p>Complete!</p> : null}
        </div>
    );
}
