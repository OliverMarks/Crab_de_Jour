import PlayerTank from "./player-tank"
import OrderCard from "./order-card"





export default function TankAndOrders ({players, setPlayers}) {



return (
    <div className="tank-and-orders-container">
    <h3>Orders</h3>
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