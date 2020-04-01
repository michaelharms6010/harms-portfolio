import React from "react";
import {Link} from "react-router-dom"
import './Navigation.scss';

export default function Navigation() {

    return (
        <div className="main-nav">
            <Link to="/bio">Bio</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}