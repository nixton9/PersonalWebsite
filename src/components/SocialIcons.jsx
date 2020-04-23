import React from 'react'
import { Github } from '../components/icons/Github'
import { Dribbble } from '../components/icons/Dribbble'
import { Linkedin } from '../components/icons/Linkedin'
import { Instagram } from '../components/icons/Instagram'

const SocialIcons = props => (
    <div className="icons">
        <a href="https://www.instagram.com/eduardoaraujo9/" className="fill-hover" target="_blank">
            <Instagram />
        </a>
        <a href="https://github.com/nixton9" className="fill-hover" target="_blank">
            <Github />
        </a>
        <a href="https://www.linkedin.com/in/eduardoaraujo9/" className="fill-hover" target="_blank">
            <Linkedin />
        </a>
        <a href="https://dribbble.com/eduardoaraujo9" className="fill-hover" target="_blank">
            <Dribbble />
        </a>
    </div>
)

export default SocialIcons