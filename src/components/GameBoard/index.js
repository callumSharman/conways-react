import './index.css'
import { useRef, useState, useEffect } from 'react';

function GameBoard({numRows, numCols}){

  const [cellsArr, setCells] = useState(Array(numRows*numCols).fill(0));
  const gridRef = useRef(null);
  const gameLoopIntervalRef = useRef(null);
  const minCellWidth = 8; // minimum width of a cell
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
    return <div className='cell' id={`cell:${index}`} key={index} onClick={handleCellClick}
              style={{width: cellWidth, height: cellWidth, backgroundColor: isAlive ? 'black' : 'white'}}></div>
  });

  // update loop (game loop)
  const update = () => {
    // for all cells, update cell into new array, replace array
    const newArray = Array.from(cellsArr);
    for(let i = 0; i < numRows*numCols; i++){
      newArray[i] = updateCell(i);
    }
    setCells(newArray);
  }

  // check in individual cells state and based on the rules of the game, return its final state
  const updateCell = (cellIdx) => {
    let cellAlive = cellsArr[cellIdx];

    if(cellAlive){
      
    }

    // a live cell dies if it has fewer than 2 live neighbours.

    // a live cell with two or three live neighbours lives on to the next generation.

    // a live cell with more than 3 neighbors dies.

    // a dead cell will be brought back to live if it has exactly 3 live neighbors.

    return Math.round(Math.random());
  }

  /* returns the number of live neighours of a cell, the following are the neighbours
      x0 x1 x2
      x3 __ x4
      x5 x6 x7
  */
  const getNumLiveNeighbours = (cellIdx) => {
    const directions = [
      [-1,0], // x1
      [1,0], // x6
      [0,-1], // x3
      [0,1], // x4
      [-1,-1], // x0
      [-1,1], // x2
      [1,-1], // x5
      [1,1], // x7
    ];

    let numLiveNeighbours = 0;

    // convert the 1D index to its corresponding (row, col) coords
    let cellRow = Math.floor(cellIdx / numCols);
    let cellCol = cellIdx % numCols;

    for (const [dRow, dCol] of directions) {
      const newRow = cellRow + dRow;
      const newCol = cellCol + dCol;
      
      // check if within bounds
      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        console.log("(newRow * numCols + newCol): " + (newRow * numCols + newCol));

        // convert back to 1D index and check if alive
        numLiveNeighbours += cellsArr[(newRow * numCols + newCol)];
      }
    }
    return numLiveNeighbours;
  }

  useEffect(() => {
    if(gameRunning){
      // run the update function periodically
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
      <button onClick={() => {playPause()}}>{gameRunning ? 'Pause' : 'Play'}</button>
      <div className='grid' id='gameGrid' ref={gridRef} style={{gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
                                    gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
      }}>
        
        {cells}
      </div>
    </>
  );
}

export default GameBoard;