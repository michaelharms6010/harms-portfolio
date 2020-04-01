import React, {useState} from "react";
import './Contact.scss';

const contact = {
    twitter: "https://twitter.com/michaelharms70",
    github: "https://github.com/michaelharms6010",
    email: "mailto:michael.harms6010@gmail.com",
    zcash: "zs1zxeehvq02nf0javeygdxnj6a78quvvlu7gsgg0e39n4uvp9hpdnyy3l4e494vt5kp4wjgrm7mtr"
}

export default function Contact() {
    const [authority, setAuthority] = useState("I love authority!")

    const handleEnter = e => {
        setAuthority("fuck you")
    }
    const handleLeave = e => {
        setAuthority("I love authority!")
    }
    return (
        <div className="contact-page">
            <h2>Contact me</h2>
            <p>I'm a team player and extremely conformist! <span onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{authority}</span></p>
            <div className="contact-icons">
                {Object.keys(contact).map(item => 
                    <a href={contact[item]}>{item}</a>   
                )}
            </div>
        
        </div>
    )
}