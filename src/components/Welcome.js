import React from "react";
import mike from "../assets/mike.jpg"
import "./Welcome.scss"
import {Link} from "react-router-dom";

export default function Welcome() {

    return (
        <div className="welcome-page">
            <img className="mike-pic" alt="Mike's face" src={mike} />
            <h1>Michael Harms</h1>
            <h3>Full Stack Web Developer, Open Source Creator</h3>
        </div>
    )
}