import React from "react";
import './Projects.scss';

import citrics from "../assets/citrics.PNG";
import zecmailer from "../assets/zecmailer.PNG";
import ZecpagesBoard from "../assets/ZecpagesBoard.PNG";
import ZecpagesFront from "../assets/ZecpagesFront.PNG";


import Project from "./Project";

let projects = [
    {image: citrics, description: "Citrics is an app that democratizes access to city data. Any user can browse the map and see metrics for different American cities provided by a proprietary data science team. I was the development lead for this project. Technologies used: React, Sass, Flask, Node, Knex, Postgres, Passportjs, AWS Elastic Beanstalk", url: "https://v1.citrics.io", github: "https://github.com/michaelharms6010/city-data-comparison-fe"},
    {image: ZecpagesFront, description: "Zecpages is a site aimed at onboarding and networking users of the Zcash cryptocurrency. It allows users to list their zcash and other contact info, as well as cross-referetially prove their identity using a social media side channel. Technologies used: React, Sass, Node, Knex, Postgres, AWS Elastic Beanstalk", url: "https://zecpages.com", github: "https://github.com/michaelharms6010/fe-zeitpages"},
    {image: ZecpagesBoard, description: "The Zecpages Board is a message board powered by anonymous Zcash memos. An EC2 instance constantly sniffs for new transactions to the board's wallet, and when a new memo is detected, it makes a post to the board. Technologies used: Reactjs, Sass, Python Requests, EC2, Zcash", url: "https://zecpages.com/board", github: "https://github.com/michaelharms6010/fe-zeitpages"},
    {image: zecmailer, description: "Zecmailer aims to increase usage of the Zcash blockchain by allowing users to send Zcash and memos to multiple recipeints. This enables anyone to easily send encrypted newsletters on a trustless blockchain. Technologies used: Javascript, HTML, CSS", url: "https://zecmailer.com", github: "https://github.com/michaelharms6010/zecmailer"}]
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