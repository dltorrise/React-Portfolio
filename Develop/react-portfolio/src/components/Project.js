import React from 'react';

function Project(props) {
    return (
        <div>
            <section className="column">
                <figure className="card-code">
                    <h2 className="title">{props.name}</h2>
                    <a href={props.deployedLink}>
                        <img src={props.img} alt={props.alt} />
                    </a>
                    <p class="info">{props.description}</p>
                    <a href={props.githubLink}><p>GitHub Repo</p></a>
                </figure>
            </section>
        </div>
    )
}

export default Project;