import React from 'react';

function Project({project}) {
    return (
        <div>
            <section className="column">
                <figure className="card-code">
                    <h2 className="title text-left text-white">{project.name}</h2>
                    <a href={project.deployedLink}>
                        <img className="border border-white border-2" style={{width:"100vw", height:"auto"}} src={project.img} alt={project.alt} />
                    </a>
                    <p className="text-center mt-1 text-white">Description: {project.description} Click on image to view more!</p>
                    <p className="text-center text-white">Skills: {project.skills}</p>
                    <a className="text-center text-white" href={project.githubLink}><p>GitHub Repo 😸</p></a>
                </figure>
            </section>
        </div>
    )
}

export default Project;