import'./single.css'



export default function Single({ card, handleChoice ,flipped,disabled}) {
    const handleClick =()=>{
        if (!disabled){
        handleChoice(card)
        }
    };
    return( 
        <div className='card'>
            <div className ={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" /*onClick={handleClick}*/ />
              <img 
                  className="back" 
                  src="/background1.png" 
                  onClick={handleClick}
                  alt="card back" />
              </div>
        </div>
    )
}
