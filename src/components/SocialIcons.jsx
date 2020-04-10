import React from 'react'
import { Github } from '../components/icons/Github'
import { Twitter } from '../components/icons/Twitter'
import { Linkedin } from '../components/icons/Linkedin'
import { Instagram } from '../components/icons/Instagram'

const SocialIcons = props => (
    <div className="icons">
        <a href="https://www.instagram.com/eduardoaraujo9/" className="fill-hover" target="_blank">
            <Instagram />
        </a>
        <a href="https://twitter.com/eddaraujo9" className="fill-hover" target="_blank">
            <Twitter />
        </a>
        <a href="https://github.com/nixton9" className="fill-hover" target="_blank">
            <Github />
        </a>
        <a href="https://www.linkedin.com/in/eduardoaraujo9/" className="fill-hover" target="_blank">
            <Linkedin />
        </a>
    </div>
)

export default SocialIcons