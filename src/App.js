import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/Menu/index.js';


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

          <div className='gameSpace'>The game will be in this box</div>

          <div className='section' id='footer'>
            Designed and developed in Visual Studio Code with React, deployed through GitHub Pages - 2024
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;