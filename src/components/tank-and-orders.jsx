import PlayerTank from "./player-tank"
import OrderCard from "./order-card"
import CrabDeJourCard from './crab-de-jour-card'





export default function TankAndOrders ({players, setPlayers, gameState}) {



return (
    <div className="tank-and-orders-container">

      <CrabDeJourCard
      gameState={gameState}
      
      />

    
    {/* <h3>Orders</h3> */}
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