import React from "react";
import './Contact.scss';

import github from "../assets/githublogo.png"
import twitter from "../assets/twitterlogo.png"
import zcash from "../assets/zcashlogo.png"
import gmail from "../assets/gmaillogo.png"


const contact = [
    {service: "twitter", url: "https://twitter.com/michaelharms70", icon: twitter},
    {service: "github", url: "https://github.com/michaelharms6010", icon: github},
    {service: "gmail", url: "mailto:michael.harms6010@gmail.com", icon: gmail},
    {service: "zcash", url: "zcash:zs1zxeehvq02nf0javeygdxnj6a78quvvlu7gsgg0e39n4uvp9hpdnyy3l4e494vt5kp4wjgrm7mtr", icon: zcash},
]

export default function Contact() {

    return (
        <div data-aos="zoom-in-right" className="contact-page">
            <h2>Contact me</h2>
            <p className="contact-cta">I'm always looking for new and exciting ways to contribute to the positive-sum economy of ideas! Contact me and let's do great things!</p>
            <div className="contact-icons">
                {contact.map(item => 
                <a href={item.url}>
                    <img alt={`${item.service} logo`} src={item.icon} />
                </a>)

                }
            </div>
        
        </div>
    )
}