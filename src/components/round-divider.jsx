/* generic welcome to the game message to start and round summary afterwards

make key words hoverable in order to introduce game elements 
- rockpools
- coins
-bait 
-shop
-
*/

export default function IntroCard ({gameState, setGameState}) {



    return (
        <dialog open>
            <h3>Welcome to Crab de Jour</h3>
            <p>Ahoy there young crabber! All hands on nets we're a man short and have lots 
                of orders to fufill. I'm gonna need you down at the RockPools sharpish to pull them in.
                Things are pretty tight cashflow wise at the moment so We'll need to make 15 Coins to make 
                it to tomorrow. </p>
                <p>
                Remember to stock up on bait at the shop to make things easier and keep an eye out 
                for your chance to catch the Crab de Jour! Oh and try to be careful what you catch
                anything we can't use for orders or that isnt the crab de jour will cost us at the end 
                of the day.
                </p>
                <p>
                Godspeed and happy crabbing me'lad 
                   </p>

                   <button onClick={dialog.close()}>Start Day 1</button>
        </dialog>





    )

}