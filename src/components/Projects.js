import React from "react";
import './Projects.scss';
import Project from "./Project";
import citrics from "../assets/citrics.PNG";
import zecmailer from "../assets/zecmailer.PNG";
import ZecpagesBoard from "../assets/ZecpagesBoard.PNG";
import ZecpagesFront from "../assets/ZecpagesFront.PNG";

let projects = [
    {image: citrics, description: "Citrics Description"},
    {image: zecmailer, description: "Zecmailer Description"},
    {image: ZecpagesFront, description: "Zecpages Frontpage"},
    {image: ZecpagesBoard, description: "Zecpages Board"}]

export default function Projects() {


    return (
        <div className="project-grid">
            

        </div>
    )
}