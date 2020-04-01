import React from "react";
import './Projects.scss';

import citrics from "../assets/citrics.PNG";
import zecmailer from "../assets/zecmailer.PNG";
import ZecpagesBoard from "../assets/ZecpagesBoard.PNG";
import ZecpagesFront from "../assets/ZecpagesFront.PNG";


import Project from "./Project";

let projects = [
    {image: citrics, description: "Citrics Description", url: "https://v1.citrics.io", github: "https://github.com/michaelharms6010/city-data-comparison-fe"},
    {image: zecmailer, description: "Zecmailer Description", url: "https://zecmailer.com", github: "https://github.com/michaelharms6010/zecmailer"},
    {image: ZecpagesFront, description: "Zecpages Frontpage", url: "https://zecpages.com", github: "https://github.com/michaelharms6010/fe-zeitpages"},
    {image: ZecpagesBoard, description: "Zecpages Board", url: "https://zecpages.com/board", github: "https://github.com/michaelharms6010/fe-zeitpages"}]

export default function Projects() {


    return (
        <>
        <h2>Some open-source products I've built:</h2> 
        <div className="project-grid">
            {projects.map(project => <Project image={project.image} description={project.description} url={project.url} />)}

        </div>
        </>
    )
}