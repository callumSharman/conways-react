import './index.css'
import { useRef, useState, useEffect } from 'react';

function GameBoard({numRows, numCols}){

  const [cellsArr, setCells] = useState(Array(numRows*numCols).fill(0));
  const gridRef = useRef(null);
  const gameLoopIntervalRef = useRef(null);
  const minCellWidth = 20; // minimum width of a cell
  const [cellWidth, setCellWidth] = useState(minCellWidth);

  const [gameRunning, setGameRunning] = useState(false);

  // swaps the play or pause state
  const playPause = () => {
    setGameRunning(!gameRunning);
  }
  
  // fill the grid with white cells
  const emptyGrid = () => {
    const newArray = Array.from(cellsArr).fill(0);
    setCells(newArray);
  }

  // fill the grid with black cells
  const fillGrid = () => {
    const newArray = Array.from(cellsArr).fill(1);
    setCells(newArray);
  }

  // fill the grid with randomised cells
  const randomiseGrid = () => {
    const newArray = Array.from(cellsArr);
    for(let i = 0; i < cellsArr.length; i ++){
      newArray[i] = Math.round(Math.random());
    }
    setCells(newArray);
  }

  // switches the colour of a cell
  const switchCellState = (cellId) => {
    // cellId takes the form "cell:___"
    let cellIndex = cellId.slice(5);
    const newArray = Array.from(cellsArr);
    newArray[cellIndex] ^= 1;
    setCells(newArray);
  }

  // handles when the user clicks on a cell
  const handleCellClick = (event) => {
    const cellId = event.target.id;
    switchCellState(cellId);
  }

  // 1 is alive, 0 is dead - alive is black, dead is white
  const cells = cellsArr.map((isAlive, index) => {
    return <div className='cell' id={`cell:${index}`} onClick={handleCellClick}
              style={{width: cellWidth, height: cellWidth, backgroundColor: isAlive ? 'black' : 'white'}}></div>
  });

  // update loop (game loop)
  const update = () => {
    randomiseGrid();
  }

  useEffect(() => {
    if(gameRunning){
      console.log(`gameRunning: ${gameRunning}`);
      gameLoopIntervalRef.current = setInterval(update, 100);
    } else {
      clearInterval(gameLoopIntervalRef.current);
    }


    return () => clearInterval(gameLoopIntervalRef.current);
  }, [gameRunning]);

  return(
    <>
      <button onClick={() => {emptyGrid()}}>Empty</button>
      <button onClick={() => {fillGrid()}}>Fill</button>
      <button onClick={() => {randomiseGrid()}}>Randomise</button>
      <button onClick={() => {playPause()}}>{gameRunning ? 'Play' : 'Pause'}</button>
      <div className='grid' id='gameGrid' ref={gridRef} style={{gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
                                    gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
      }}>
        
        {cells}
      </div>
    </>
  );
}

export default GameBoard;