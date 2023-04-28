import React from 'react';
import headshot from '../../assets/images/headshot.jpg'

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-center my-3 text-white">About Me</h1>
      <figure>
      <img id="headshot" style={{width:"100vw", maxHeight:"350px", objectFit:"cover"}} src={headshot} alt="A headshot of me smiling at Harold Washington Library"/>
    </figure>
      <p id="aboutme" className="text-center text-white">
      My name is Danielle Torrisè (Ta-Ree-See). I am a Chicago native looking to work full-time as a Web Developer! Check out some of my favorite projects in the Projects section ☺
    <br></br>
    <br></br>
    My other interests outside of work include AI, French, and indulging in my artistic side.
    <br></br>
    <br></br>
      Skills: HTML | CSS | JavaScript | Third-Party APIs | Web APIs | Server-Side APIs | Node js | OOP | Express js | Handlebars js | MySQL | ORM | MVC Paradigm | Sequelize | NoSQL | Progressive Web Applications | React js | MERN | State | Email js | WordPress | Insomnia
      </p>
    </div>
  );
}
