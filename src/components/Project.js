import React from "react";

export default function Project({image, description, url}) {

    return(
        <div className="project">
            <a href={url} target="_blank">
            <img className="project-image" src={image} />
            </a>
            <p classname="project-description">{description}</p>
        </div>
    )
}