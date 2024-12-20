import './index.css'
import linkedInLogo from '../../img/icons8-linkedin.svg';
import gitHubLogo from '../../img/icons8-github.svg';
import goodreadsLogo from '../../img/icons8-goodreads.svg';

function SocialLinks() {
  return(
    <div className='externalLinks'>
      <div className='externalLink'>
        <a href="https://www.linkedin.com/in/callum-sharman-366b532ab/" target="_blank" rel="noopener noreferrer">
          <img className='logo' src={linkedInLogo} alt="LinkedIn Logo"/>
        </a>
      </div>
      <div className='externalLink'>
        <a href="https://github.com/callumSharman" target="_blank" rel="noopener noreferrer">
          <img className='logo' src={gitHubLogo} alt="GitHub Logo"/>
        </a>
      </div>
      <div className='externalLink'>
        <a href="https://www.goodreads.com/user/show/165214915-callum-sharman" target="_blank" rel="noopener noreferrer">
          <img className='logo' src={goodreadsLogo} alt="Goodreads Logo"/>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;