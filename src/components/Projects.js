import React from "react";
import './Projects.scss';

import citrics from "../assets/citrics.png";
import zecmailer from "../assets/zecmailer.png";
import ZecpagesBoard from "../assets/ZecpagesBoard.png";
import ZecpagesFront from "../assets/ZecpagesFront.png";
import wordsurge from "../assets/wordsurge.png";
import Project from "./Project";

let projects = [
    {image: citrics, name: "Citrics", description: "Citrics is an app that democratizes access to city data. Any user can browse the map and see metrics for different American cities provided by a proprietary data science team. I was the development lead for this project.", techs: ["React", "Sass", "Flask", "Node", "Knex", "Postgres", "Passportjs", "AWS Elastic Beanstalk"], url: "https://v1.citrics.io", github: "https://github.com/michaelharms6010/city-data-comparison-fe"},
    {image: wordsurge, name: "Word Surge", description: "Wordsurge is a platform that procedurally generates word search puzzles based on lists of words uploaded by users. This was a two-week hackathon build with the help of one of my part-time students.", techs: ["React", "Sass", "Node", "Knex", "Postgres", "Heroku"], url: "https://wordsurge.xyz", github: "https://github.com/pt11-word-find"},
    {image: ZecpagesFront, name: "Zecpages", description: "Zecpages is a site aimed at onboarding and networking users of the Zcash cryptocurrency. It allows users to list their zcash and other contact info, as well as cross-referetially prove their identity using a social media side channel.", techs: ["React", "Sass", "Node", "Knex", "Postgres", "AWS Elastic Beanstalk"], url: "https://zecpages.com", github: "https://github.com/michaelharms6010/fe-zeitpages"},
    {image: ZecpagesBoard, name: "Zecpages Board", description: "The Zecpages Board is a message board powered by anonymous Zcash memos. An EC2 instance constantly sniffs for new transactions to the board's wallet, and when a new memo is detected, it makes a post to the board.", techs: ["React", "Nodejs", "Knex", "Postgres", "Python", "EC2", "Zcash"], url: "https://zecpages.com/board", github: "https://github.com/michaelharms6010/fe-zeitpages"},
    {image: zecmailer, name: "Zecmailer", description: "Zecmailer aims to increase usage of the Zcash blockchain by allowing users to send Zcash and memos to multiple recipeints. This enables anyone to easily send encrypted newsletters on a trustless blockchain.", techs: ["Javascript", "HTML", "CSS", "zcashd"], url: "https://zecmailer.com", github: "https://github.com/michaelharms6010/zecmailer"}]
export default function Projects() {
    return (
        <div className="project-page">
            <h2>My Projects:</h2> 
            <div className="project-grid">
                {projects.map(project => { 
                    return <Project 
                        key={project.url}
                        image={project.image} 
                        description={project.description} 
                        url={project.url} 
                        techs={project.techs}
                        githuburl={project.github}
                        name={project.name}
                />})}
            </div>
        </div>
    )
}