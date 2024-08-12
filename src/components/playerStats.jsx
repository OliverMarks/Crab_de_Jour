
import crabImage from '../assets/imgs/crabs/crab.png'
import coinImage from '../assets/imgs/icons/coin-image.png';

import brexitImage from '../assets/imgs/powers/brexit.png';
import stackCoinsImage from '../assets/imgs/powers/stack-coins.png';
import crabCrackImage from '../assets/imgs/bait/bait-crab-crack.png'; 




export default function PlayerStats({players, gameState}) {
    

  

    return (
        <div className="playerStats-container">

            <h3>Day {gameState.day}</h3>
            <h3>Coins:  {players.coins} </h3> <img src={coinImage}></img>
            <h3>Current Modifier: +{players.currentModifier}</h3>
            <h3>Target: {gameState.requiredCoins}</h3> <img src={coinImage}></img>
            <div>
                <h3>Powers</h3>
                {players?.powers?.length > 0 && players.powers.map((power, idx) => (
  <img key={idx} src={power.image} title={power.description} alt={power.title} />
))}


            </div>
           
           
            
        </div>
    );
}
