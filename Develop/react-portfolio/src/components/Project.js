import React from 'react';

function Project({project}) {
    return (
        <div>
            <section className="column">
                <figure className="card-code">
                    <h2 className="title text-center">{project.name}</h2>
                    <a href={project.deployedLink}>
                        <img src={project.img} alt={project.alt} />
                    </a>
                    <p>{project.description}</p>
                    <p>{project.skills}</p>
                    <a href={project.githubLink}><p>GitHub Repo</p></a>
                </figure>
            </section>
        </div>
    )
}

export default Project;