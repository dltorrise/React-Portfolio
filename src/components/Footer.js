import React from 'react';

export default function Footer() {
  return (
    <div id="footer-parent-div" className='mt-3'>
      <div id="logos" className="d-flex justify-content-around">
        <a href="https://www.linkedin.com/in/danielle-louise-torrise/"><img alt="linkedin icon"src="/assets/images/linkedin.png" width="50" height="50"></img></a>
        <a href="https://github.com/dltorrise"><img alt="github icon" src="/assets/images/github.png" width="50" height="50"></img></a>
        <a href="https://stackoverflow.com/users/20791864/dani"><img alt="stack overflow icon" src="/assets/images/stack-overflow.jpg" width="50" height="50"></img></a>
      </div>
      <h6 className="text-center text-white h6 my-1">This portfolio was generated with MERN. Last updated May 2023.</h6>
    </div>
  );
}
