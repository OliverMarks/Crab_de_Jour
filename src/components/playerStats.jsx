
import crabImage from '../assets/imgs/crabs/crab.png'



export default function PlayerStats({players}) {
    let caughtCrabs = players.crabs;

    return (
        <div className="playerStats-container">
            <h3>Active Player: {players.name}</h3>
            <h3>Coins: {players.coins}</h3>
            <h3>Current Modifier: {players.currentModifier}</h3>
           
            <p>crab types
1-2 mud,
3-4 blue,
5-6 purple,
7-8 ghost,
9-10 gold,
11-12 Jade,
</p>
            {/* <div>
                <h2>Crab Haul</h2>
                {caughtCrabs.map((crab, index) => (
                    <img key={index} src={crabImage} alt={crab} className='playerStats-crab-img' />
                ))}
            </div> */}
        </div>
    );
}
