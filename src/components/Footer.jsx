import React from 'react';
import githubMark from '../../src/public/github-mark.png';
import linkedInLogo from '../../src/public/LI-In-Bug.png';

const Footer = () => {
  const imageStyle = {
    width: '50px',
    height: '50px',
    margin: '10px'
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <footer style={footerStyle}>
      <a href="https://github.com/KC-Nick/" target="_blank" rel="noreferrer">
        <img src={githubMark} alt="GitHub" style={imageStyle} />
      </a>
      <a href="https://www.linkedin.com/in/kasi-nichole-wilson-4387a12aa" target="_blank" rel="noreferrer">
        <img src={linkedInLogo} alt="LinkedIn" style={imageStyle} />
      </a>
    </footer>
  );
};

export default Footer;