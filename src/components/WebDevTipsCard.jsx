import React from 'react'
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
                    Sharing all sorts of Web Dev related tips on my Instagram page and here on posts
                </SubTitle>
                <div className="buttons">
                    <a href="#">
                        <Button big>Visit Instagram</Button>
                    </a>
                    <a href="#">
                        <Button inversed big>See online</Button>
                    </a>
                </div>
            </div>
        </SoftElement>
    </WDTCard>
)

export default WebDevTipsCard