import React from "react";

export default function Project({image, description, url}) {

    return(
        <div className="project">
            <a rel="noopener noreferrer" href={url} target="_blank">
                <img alt={description.split(" ")[0]}className="project-image" src={image} />
            </a>
            <p classname="project-description">{description}</p>
        </div>
    )
}