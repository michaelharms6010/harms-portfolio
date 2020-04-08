import React from "react";
import './Bio.scss';

export default function Bio() {

    return (
        <div data-aos="zoom-in" className="bio">
            <div className="greeting">
                <h2>A Hearty Hello to all!</h2>
                <p>Hi! I'm Michael. I'm a full stack developer building open source educational, entertainment, and cryptocurrency products. A relentless optimist, I'm convinced humanity is at the dawn of a new Golden Age. I aim to bring efficient products to market to help be a part of designing and building a better future for all humans.</p>
            </div>
            <div className="team-leadership">
                <h2>Team Leader</h2>
                <p>As a Team Lead in Lambda School's WEB program, I mentor new web developers through their first taste of HTML/CSS/Javascript, all the way through their first React and Node apps. Along the way I also am a PM for student builds, basically week-long hackathons where cross-functional teams apply what they've learned to building a real app in an Agile team environment.</p>
            </div>
            <div className="team-leadership">
                <h2>Open Source Builder</h2>
                <p>I build free software tools in my spare time which aim democratize access to financial privacy. I love Zcash, Monero, and all cryptocurrencies doing work in this area, who are working to make the dignity and consent that comes with privacy available to all, not just the super-powerful.</p>
            </div>
            <button className="next-button">See some products I've built!</button>
        </div>
    )
}