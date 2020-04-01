import React from "react";
import './Projects.scss';

import citrics from "../assets/citrics.PNG";
import zecmailer from "../assets/zecmailer.PNG";
import ZecpagesBoard from "../assets/ZecpagesBoard.PNG";
import ZecpagesFront from "../assets/ZecpagesFront.PNG";


import Project from "./Project";

let projects = [
    {image: citrics, description: "Citrics Description", url: "https://v1.citrics.io"},
    {image: zecmailer, description: "Zecmailer Description", url: "https://zecmailer.com"},
    {image: ZecpagesFront, description: "Zecpages Frontpage", url: "https://zecpages.com"},
    {image: ZecpagesBoard, description: "Zecpages Board", url: "https://zecpages.com/board"}]

export default function Projects() {


    return (
        <>
        <h2>Here are some products I've built:</h2> 
        <div className="project-grid">
            {projects.map(project => <Project image={project.image} description={project.description} url={project.url} />)}

        </div>
        </>
    )
}