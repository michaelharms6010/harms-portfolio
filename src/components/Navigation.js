import React from "react";
import {Link, NavLink} from "react-router-dom"
import './Navigation.scss';
import logo from "../logo.svg";

export default function Navigation() {

    return (
        <div className="main-nav">
            <Link to="/"><img alt="Mike's smiling face" src={logo} width={100} height={100}/></Link>

            <div className="nav-links">
                <NavLink activeClassName="active-link" to="/bio">Bio</NavLink>
                <NavLink activeClassName="active-link" to="/products">Products</NavLink>
                <NavLink activeClassName="active-link" to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}