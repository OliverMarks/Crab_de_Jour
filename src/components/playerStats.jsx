
import crabImage from '../assets/imgs/crabs/crab.png'
import coinImage from '../assets/imgs/icons/coin-image.png';



export default function PlayerStats({players, gameState}) {
    

    return (
        <div className="playerStats-container">

            <h3>Day {gameState.day}</h3>
            <h3>Coins:  {players.coins} </h3> <img src={coinImage}></img>
            <h3>Current Modifier: +{players.currentModifier}</h3>
            <h3>Target: {gameState.requiredCoins}</h3> <img src={coinImage}></img>
           
           
            
        </div>
    );
}
