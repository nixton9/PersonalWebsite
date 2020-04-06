import React from 'react'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const SocialIcons = props => (
    <div className="icons">
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={twitter} alt="Twitter" /></a>
        <a href="#"><img src={github} alt="GitHub" /></a>
        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
    </div>
)

export default SocialIcons