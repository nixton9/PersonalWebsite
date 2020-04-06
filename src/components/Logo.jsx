import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const LogoElement = styled.a`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.darkGrey};
    text-transform: uppercase;
    letter-spacing: .2rem;
    span {
        color: ${theme.white};
    }
`

const Logo = props => (
    <LogoElement>
        Eduardo<span>A</span>raujo
    </LogoElement>
)

export default Logo