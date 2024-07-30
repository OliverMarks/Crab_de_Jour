import PlayerTank from "./player-tank"
import OrderCard from "./order-card"
import CrabDeJourCard from './crab-de-jour-card'





export default function TankAndOrders ({players, setPlayers, gameState}) {



return (
    <div className="tank-and-orders-container">

      {/* <h3>Crab de Jour:</h3>
        <CrabDeJourCard 
        gameState ={gameState}
        /> */}

    
    <h3>Orders</h3>
    {/* insert crab selected for crab de jour */}
    {players.orders.map((order, idx) => (
      <OrderCard
        key={idx}
        order={order}
        players={players}
        setPlayers={setPlayers}
      />
      ))}


<h3>Crab Tank</h3>
    <PlayerTank 
    players = {players}
    />

</div>
    
)


}