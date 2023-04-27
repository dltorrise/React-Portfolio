import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-center my-3 text-white">About Me</h1>
      <figure>
      <img id="headshot" style={{width:"100vw", height:"auto"}} src="/assets/images/headshot.jpg" alt="A headshot of me smiling at Harold Washington Library"/>
    </figure>
      <p id="aboutme" className="text-center text-white">
      My name is Danielle Torrisè (Ta-Ree-See). I am a Chicago native looking to work full-time as a Web Developer! Check out some of my favorite projects in the Projects section ☺
      </p>
    </div>
  );
}
