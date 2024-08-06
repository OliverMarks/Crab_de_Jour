import PlayerTank from "./player-tank"
import OrderCard from "./order-card"
import CrabDeJourCard from './crab-de-jour-card'





export default function TankAndOrders ({players, setPlayers, gameState}) {


  const generateRandomFourDigitNumber = () => {
    return Math.floor(Math.random() * 9000) + 1000;
  };

  const orderNumber = generateRandomFourDigitNumber()


return (
    <div className="tank-and-orders-container">

      <CrabDeJourCard
      gameState={gameState}
      
      />

   
    <div className="orders-container">
      
    {/* insert crab selected for crab de jour */}
    {players.orders.map((order, idx) => (
      <OrderCard
        key={idx}
        order={order}
        
        players={players}
        setPlayers={setPlayers}
      />
      ))}
</div>


    <PlayerTank 
    players = {players}
    />

</div>
    
)


}