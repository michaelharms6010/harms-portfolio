import React from "react";
import mike from "../assets/mike.jpg"
import "./Welcome.scss"
import {Link} from "react-router-dom";
import WelcomeContact from "./WelcomeContact";

export default function Welcome() {

    return (
        <>
        <div data-aos="fade-down" className="welcome-page">
            <Link to="/bio"><img className="mike-pic" alt="Mike's face" src={mike} /></Link>
            <h1>Michael Harms</h1>
            <h3>Full Stack Web Developer, Open Source Creator</h3>
            <div className="skills">
                <p>
                    <strong>Skills: React, Node, Knex, Postgres, Sass, AWS, Git, Passportjs, zcashd</strong>
                </p>
            </div>
            <Link to="/products"><button className="next-button">See My Recent Projects</button></Link>
            
        </div>
        <WelcomeContact />
        </>
    )
}