import React from 'react';
import linkedinLogo from '../assets/images/linkedin.png'
import githubLogo from '../assets/images/github.png'
import stackOverflowLogo from '../assets/images/stack-overflow.png'

export default function Footer() {
  return (
    <div id="footer-parent-div" className='mt-3'>
      <div id="logos" className="d-flex justify-content-around">
        <a href="https://www.linkedin.com/in/danielle-louise-torrise/"><img alt="linkedin icon" src={linkedinLogo} width="50" height="50"></img></a>
        <a href="https://github.com/dltorrise"><img  style={{borderRadius: "50%"}} alt="github icon" src={githubLogo} width="50" height="50"></img></a>
        <a href="https://stackoverflow.com/users/20791864/dani"><img style={{borderRadius: "25%"}} alt="stack overflow icon" src={stackOverflowLogo} width="50" height="50"></img></a>
      </div>
      <h6 className="text-center text-white h6 my-1">This portfolio was generated with MERN. Last updated May 2023.</h6>
    </div>
  );
}
