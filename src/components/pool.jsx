import trashImage from '../assets/imgs/crabs/sea-trash.png'
import crabImage from '../assets/imgs/crabs/pixel-crab.png'

export default function Pool ({onClick, pool, className}) {

    const handleClick = () => {
        onClick(pool); // Call the onClick callback with the card as argument
      };

    return (
        <div className={className} onClick={handleClick}>
        
            
            {pool.rollSuccess === undefined ? pool.poolDifficulty : null}
            {pool.rollSuccess === undefined ? null : pool.rollSuccess ? <img className='catch-image' src= {crabImage} alt="Crab" /> : <img className='catch-image' src={trashImage}  alt="Trash" />}

        </div>
    )
}