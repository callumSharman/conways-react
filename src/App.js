import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/Menu/index.js';
import GameBoard from './components/GameBoard/index.js';


function App() {

  const [inMobileMode, setInMobileMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768) setInMobileMode(true); 
      else setInMobileMode(false);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <div className="App">
      <Menu></Menu>
      <div className='main'>
        <div className='mainContent'>

          <h1>Conway's Game of Life</h1>
          <h2>Conway's Game of Life</h2>
          <p></p>
          <GameBoard numCols={8} numRows={4}></GameBoard>
          
          <div className='section' id='footer'>
            Designed and developed in Visual Studio Code with React, deployed through GitHub Pages - 2025
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;