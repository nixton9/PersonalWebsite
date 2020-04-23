import React from 'react'
import { Link } from 'gatsby'
import { SoftElement } from '../styles/components/SoftElement'
import { SubTitle } from '../styles/components/SubTitle'
import { Button } from '../styles/components/Button'
import { WDTCard } from '../styles/components/WDTCard'
import logo from '../assets/logo.svg'

const WebDevTipsCard = () => (
    <WDTCard>
        <SoftElement className="banner">
            <img src={logo} alt="WebDevTips" />
            <div>
                <SubTitle>
                    Sharing all sorts of Web Dev related tips on my Instagram page and here on this website!
                </SubTitle>
                <div className="buttons">
                    <a href="https://www.instagram.com/webdev.tips/" target="_blank">
                        <Button className="bg-hover" big>Visit Instagram</Button>
                    </a>
                    <Link to="/tips">
                        <Button className="color-hover" inversed big>See online</Button>
                    </Link>
                </div>
            </div>
        </SoftElement>
    </WDTCard>
)

export default WebDevTipsCard