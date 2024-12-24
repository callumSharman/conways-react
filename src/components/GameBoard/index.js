import './index.css'

function GameBoard({numRows, numCols}){

  

  const cells = Array.from({ length: numRows*numCols }, (_, index) => (
    <div className='cell'>{index + 1}</div>
  ));

  return(
    <>
      <div className='grid' style={{gridTemplateColumns: `repeat(${numCols}, 100px)`,
                                    gridTemplateRows: `repeat(${numRows}, 100px)`,
      }}>
        
        {cells}
      </div>
    </>
  );
}

export default GameBoard;