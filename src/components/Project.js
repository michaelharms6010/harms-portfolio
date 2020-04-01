import React from "react";

export default function Project({image, description}) {

    return(
        <div className="project">
            <img className="project-image" src={image} />
            <p classname="project-description">{description}</p>
        </div>
    )
}