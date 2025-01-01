import './index.css'
import { useRef, useState } from 'react';

function GameBoard({numRows, numCols}){

  const [cellsArr, setCells] = useState(Array(numRows*numCols).fill(0));
  const gridRef = useRef(null);
  const minCellWidth = 20; // minimum width of a cell
  const [cellWidth, setCellWidth] = useState(minCellWidth);

  // const cells = Array.from({ length: numRows*numCols }, (_, index) => (
  //   <div className='cell' style={{width: cellWidth, height: cellWidth}}></div>
  // ));


  // 1 is alive, 0 is dead
  const cells = cellsArr.map((isAlive, index) => {
    return <div className='cell' style={{width: cellWidth, height: cellWidth, backgroundColor: isAlive ? 'black' : 'white'}}></div>
  });
  

  const emptyGrid = () => {

    const newArray = Array.from(cellsArr).fill(0);
    setCells(newArray);
  }
  const fillGrid = () => {

    const newArray = Array.from(cellsArr).fill(1);
    setCells(newArray);
  }

  return(
    <>
      <button onClick={() => {emptyGrid()}}>Empty</button>
      <button onClick={() => {fillGrid()}}>Fill</button>
      <div className='grid' id='gameGrid' ref={gridRef} style={{gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
                                    gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
      }}>
        
        {cells}
      </div>
    </>
  );
}

export default GameBoard;