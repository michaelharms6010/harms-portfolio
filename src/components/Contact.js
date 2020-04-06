import React, {useState} from "react";
import './Contact.scss';

import github from "../assets/githublogo.png"
import twitter from "../assets/twitterlogo.png"
import zcash from "../assets/zcashlogo.png"
import gmail from "../assets/gmaillogo.png"


const contact = [
    {url: "https://twitter.com/michaelharms70", icon: twitter},
    {url: "https://github.com/michaelharms6010", icon: github},
    {url: "mailto:michael.harms6010@gmail.com", icon: gmail},
    {url: "zcash:zs1zxeehvq02nf0javeygdxnj6a78quvvlu7gsgg0e39n4uvp9hpdnyy3l4e494vt5kp4wjgrm7mtr", icon: zcash},
]

export default function Contact() {
    const [authority, setAuthority] = useState("I love authority!")

    const handleEnter = e => {

    }
    const handleLeave = e => {

    }
    return (
        <div className="contact-page">
            <h2>Contact me</h2>
            <p>I'm a team player and extremely conformist! <span onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{authority}</span></p>
            <div className="contact-icons">
                {contact.map(item => 
                <a href={item.url}>
                    <img src={item.icon} />
                </a>)

                }
            </div>
        
        </div>
    )
}