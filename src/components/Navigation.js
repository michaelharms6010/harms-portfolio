import React from "react";
import {Link} from "react-router-dom"
import './Navigation.scss';
import logo from "../logo.svg";

export default function Navigation() {

    return (
        <div className="main-nav">
            <img src={logo} width={100} height={100}/>

            <div className="nav-links">
                <Link to="/bio">Bio</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}