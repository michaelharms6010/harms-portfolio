import React from "react";
import github from "../assets/githublogo.png"

export default function Project({image, description, url, techs, githuburl}) {
    return(
        <div className="project">
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