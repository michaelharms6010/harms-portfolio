import React from "react";
import './Projects.scss';

import citrics from "../assets/citrics.PNG";
import zecmailer from "../assets/zecmailer.PNG";
import ZecpagesBoard from "../assets/ZecpagesBoard.PNG";
import ZecpagesFront from "../assets/ZecpagesFront.PNG";


import Project from "./Project";

let projects = [
    {image: citrics, description: "Citrics Description"},
    {image: zecmailer, description: "Zecmailer Description"},
    {image: ZecpagesFront, description: "Zecpages Frontpage"},
    {image: ZecpagesBoard, description: "Zecpages Board"}]

export default function Projects() {


    return (
        <div className="project-grid">
            {projects.map(project => <Project image={project.image} description={project.description} />)}

        </div>
    )
}