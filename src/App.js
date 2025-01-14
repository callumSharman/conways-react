import './App.css';
import Menu from './components/Menu/index.js';
import GameBoard from './components/GameBoard/index.js';


function App() {

  return (
  <div className="App">
      <Menu></Menu>
      <div className='main'>
        <div className='mainContent'>

          <h1>Conway's Game of Life</h1>
          <h2>Conway's Game of Life</h2>
          <p></p>
          <GameBoard numRows={50} numCols={100}></GameBoard>
          
          <div className='section' id='footer'>
            Designed and developed in Visual Studio Code with React, deployed through GitHub Pages - 2025
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;