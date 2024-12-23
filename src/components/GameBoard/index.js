import './index.css'

function GameBoard({numRows, numCols}){

  return(
    <>
      <div className='grid' style={{gridTemplateColumns: `repeat(${numCols}, 100px)`,
                                    gridTemplateRows: `repeat(${numRows}, 100px)`,
      }}>
        <div className='cell'>1</div>
        <div className='cell'>2</div>
        <div className='cell'>3</div>
        <div className='cell'>4</div>
        <div className='cell'>5</div>
        <div className='cell'>6</div>
        <div className='cell'>7</div>
        <div className='cell'>8</div>
        <div className='cell'>9</div>
        <div className='cell'>10</div>

      </div>
    </>
  );
}

export default GameBoard;