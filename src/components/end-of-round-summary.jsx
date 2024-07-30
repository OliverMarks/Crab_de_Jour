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







export default function EndOfRoundSummary ({players, gameState}) {

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



return (

    <div> 


{/* end of round summary should include:
-crabs caught 
- trash recycled 
- number of cards used? 
- coins earnt 
- orders fufilled 
- over fishing penalty (subtract unused crabs maybe half the number or something)
- next day button 
*/}



<button>


</button>



        </div> 



)



}



/* end of round summary should include:
-crabs caught 
- trash recycled 
- number of cards used? 
- coins earnt 
- orders fufilled 
- over fishing penalty (subtract unused crabs maybe half the number or something)
- next day button 
*/
