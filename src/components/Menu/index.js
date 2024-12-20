import './index.css'
import SocialLinks from '../SocialLinks/index.js'
import { useEffect, useState } from 'react';

function Menu(){

  const [inMobileMode, setInMobileMode] = useState(false);
  const [mobileMenuOpen, setMoblieMenuOpen] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth <= 768){
        setInMobileMode(true);
        setMoblieMenuOpen(false); // closes menu
      } else {
        setInMobileMode(false);
        setMoblieMenuOpen(true); // opens the full menu back up
      }
    }

    if (!inMobileMode){ document.body.style.overflow = '';}
    else if (mobileMenuOpen && inMobileMode) {document.body.style.overflow = 'hidden';}
    else {document.body.style.overflow = '';}

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  return(
    <>
      <div className='menu' 
        style={{height:mobileMenuOpen ? '100%':'45px',}}>
        <div style={{display:inMobileMode ? 'block':'none',
        }}>
          <div className='menuButton' onClick={ () => setMoblieMenuOpen(!mobileMenuOpen) }
            style={{display:mobileMenuOpen ? 'flex': 'none',}}>
            X
          </div>
          <div className='menuButton' onClick={ () => setMoblieMenuOpen(!mobileMenuOpen) }
            style={{display:mobileMenuOpen ? 'none': 'flex',}}>
            <div>
              <div className="menuBtnLine"></div><div className="menuBtnLine"></div><div className="menuBtnLine"></div>
            </div>
          </div>
        </div>

        <div className='socialLinks'>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </>
  );
}

export default Menu;