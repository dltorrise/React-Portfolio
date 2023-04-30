import React from 'react';
import Project from '../Project'
import photo1 from '../../assets/images/Youtube-Gif-Creations.png'
import photo2 from '../../assets/images/screenshot-clown-factory.png'
import photo3 from '../../assets/images/screenshot-ecommerce-backend.png'
import photo4 from '../../assets/images/screenshot-Shoe-Store.png'
import photo5 from '../../assets/images/screenshot-social-media-api.png'
import photo6 from '../../assets/images/Mini-Project-1-Screenshot.png'

const projectsArray = [
    {
        id: 0,
        name: "Youtube Gif Creations",
        img: photo1,
        alt: "screenshot of my first project, Youtube Gif Creations, in which you can search for a gif and a video. Layout is purple.",
        description: "A website in which you can create your own video using the Youtube Iframe API, Youtube Data API and Giphy API.",
        skills: "HTML, CSS, JavaScript, Youtube Data & Iframe API, Local Storage, Group Project",
        deployedLink: "https://dltorrise.github.io/Youtube-Gif-Creations-2.0/",
        githubLink: "https://github.com/dltorrise/Youtube-Gif-Creations-2.0"
    },
    {
        id: 1,
        name: "Clown Factory Employee Tracker",
        img: photo2,
        alt: "screenshot of my Clown Factory Employee Tracker",
        description: "An application that uses Inquirer and SQL to track all of the employees at Harold's Clown Factory.",
        skills: "MySQL, Modularization, Node js, Inquirer js",
        deployedLink: "https://watch.screencastify.com/v/VR7g7D8ZPI1qzDN8yqTt",
        githubLink: "https://github.com/dltorrise/Clown-Factory-Employee-Tracker"
    },
    {
        id: 2,
        name: "Ecommerce Back End",
        img: photo3,
        alt: "screenshot of Ecommerce Back End Application, the server js file.",
        description: "The back end of an ecommerce web application.",
        skills: "Sequelize, ORM, Insomnia, MVC Paradigm, APIs",
        deployedLink: "https://www.youtube.com/watch?v=Va0nBU40kPc",
        githubLink: "https://github.com/dltorrise/Ecommerce-Back-End"
    },
    {
        id: 3,
        name: "Ecommerce Website: Shoe Store",
        img: photo4,
        alt: "screenshot of shoe store application with some shoe listings and sort function",
        description: "A group project in which we created a full stack web application of a Shoe Store. Deployed on Heroku.",
        skills: "Full Stack, Sequelize, ORM, HandleBars js Express js, Group Project",
        deployedLink: "https://mighty-brushlands-95444.herokuapp.com/",
        githubLink: "https://github.com/michael-loeffler/Shoe-Store"
    },
    {
        id: 4,
        name: "Social Media API",
        img: photo5,
        alt: "screenshot of insomnia endpoint for getting users",
        description: "An API that uses MongoDb to store data from a social media application. Endpoints are tested with insomnia.",
        skills: "MongoDb, Insomnia, APIs",
        //have to change this link
        deployedLink: "https://www.youtube.com/watch?v=92qUAcp7H30",
        githubLink: "https://github.com/dltorrise/social-media-backend"
    },
    {
        id: 5,
        name: "Message a Loved One",
        img: photo6,
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        skills: "HTML, CSS, SMTPjs Server",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: "https://github.com/dltorrise/Message-a-Loved-One"
    },
]

export default function Portfolio() {
    return (
        <div id="projects-parent-div">
            <h1 className="text-center text-white">Projects</h1>
            <div id="projects-listed-div">
                <Project project={projectsArray[0]} />
                <Project project={projectsArray[1]} />
                <Project project={projectsArray[2]} />
                <Project project={projectsArray[3]} />
                <Project project={projectsArray[4]} />
                <Project project={projectsArray[5]} />
            </div>
        </div>
    );
}

