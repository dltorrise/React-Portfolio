import React from 'react';
import Project from '../Project'

//Will come back to later
const projectsArray = [
    {
        id: 0,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    },
    {
        id: 1,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    },
    {
        id: 2,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    },
    {
        id: 3,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    },
    {
        id: 4,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    },
    {
        id: 5,
        name: "Message a Loved One",
        img: "",
        alt: "screenshot of website with pigeon gif and image of pigeon with message in its mouth",
        description: "A spooky website I created when I was just starting out using HTML and CSS. This website also implements an SmtpJS server to send email submissions.",
        deployedLink: "https://dltorrise.github.io/Message-a-Loved-One/",
        githubLink: ""
    }
]

export default function Portfolio() {
    return (
        <div>
            <h1>Projects</h1>
            <div>
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

