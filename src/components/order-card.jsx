import React from 'react';
import { useState, useEffect } from 'react';
import mudCrab from '../assets/imgs/crabs/mud-crab.jpg';
import blueCrab from '../assets/imgs/crabs/blue-crab.jpg';
import purpleCrab from '../assets/imgs/crabs/purple-crab.jpg';
import ghostCrab from '../assets/imgs/crabs/ghost-crab.jpg';
import goldCrab from '../assets/imgs/crabs/gold-crab.jpg';
import jadeCrab from '../assets/imgs/crabs/jade-crab.jpg';
import tickImage from '../assets/imgs/icons/tick-image.png';
import coinImage from '../assets/imgs/icons/coin-image.png';

export default function OrderCard({ order, players, setPlayers }) {

    const [orderStatus, setOrderStatus] = useState(false)
    const [orderValue, setOrderValue] = useState(0)
    
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


    useEffect(() => {
      determineOrderValue(order);
    }, [order]);

    
    
    const determineOrderValue = (order) => {
        let value = 0
        for (let i = 0; i < order.length; i++) {
          value += order[i]
        }

        

        setOrderValue(value)
    }

   



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
                coins: [players.coins + orderValue,],
                crabs: playerCrabs,
            });
            setOrderStatus(true)
        } else {
            console.log('Order could not be fulfilled');
        }
    };

    return (
        <div className='order-card'>
            
            <div className='order-reward'>
            <h3>Reward:</h3>
            <p>{orderValue}</p>
            <img className='order-coin' src={coinImage} alt='coin'/>
            </div>



            <div className='order-crabs'>
            {order.map((crab, index) => (
                <img src={selectCrabImage(crab)} alt={`Crab ${crab}`} key={index} />
            ))}
            </div>
            
            {orderStatus ? <img className='order-tick' src={tickImage} alt="tick"/> : 
            <button onClick={() => fulfillOrder(order)} > Fulfill Order</button>}
        
        </div>
    );
}
