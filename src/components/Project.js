import React from "react";

export default function Project({image, description, url, techs, githuburl,name}) {
    return(
        <div data-aos="fade-left" data-aos-duration="1000" className="project">
            <h4>{name}</h4>
            <a className="project-link" rel="noopener noreferrer" href={url} target="_blank">
                <img alt={description.split(" ")[0]}className="project-image" src={image} />
            </a>
            <p className="project-description">{description} <a className="github-link" href={githuburl}>View on Github</a></p>
            <div className="project-details">
                
                <h3>Technologies Used</h3>
                <ul>
                    {techs.map(item => <li>{item}</li>)}
                </ul>
                
            </div>
        </div>
    )
}