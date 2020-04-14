import React from "react";
import {Link} from "react-router-dom"
import './Bio.scss';

export default function Bio() {
    return (
        <div data-aos="zoom-in" className="bio">
            <div className="greeting">
                <h2>A Hearty Hello to all!</h2>
                <p>Hi! I'm Michael. I'm a full stack developer building open source educational, entertainment, and cryptocurrency products. A relentless optimist, I'm convinced humanity is at the dawn of a <strong>new Golden Age.</strong> I aim to bring efficient products to market to help be a part of designing and building a better future for all humans.</p>
                <p><strong>I build products using React, Node, Knex, Postgres, Sass, AWS, Git, Passportjs, zcashd</strong></p>
            </div>
            <div className="team-leadership">
                <h2>Team Leader</h2>
                <p>As a <strong>Team Lead in Lambda School's WEB program,</strong> I mentor new web developers through their first taste of HTML/CSS/Javascript, all the way through their first React and Node apps. Along the way I also am a PM for student builds, basically week-long hackathons where cross-functional teams apply what they've learned to building a real app in an Agile team environment.</p>
            </div>
            <div className="team-leadership">
                <h2>Open Source Builder</h2>
                <p>I build free software tools in my spare time which aim democratize access to <strong>financial freedom.</strong> I love <strong>Zcash, Monero,</strong> and all cryptocurrencies doing work in this area, who are working to make the dignity and consent that comes with privacy available to all, not just the super-powerful.</p>
            </div>
            <Link to="/projects"><button className="next-button">See My Recent Projects</button></Link>
        </div>
    )
}