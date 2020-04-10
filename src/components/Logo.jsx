import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme } from '../styles/theme'

const LogoElement = styled.div`
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
        <Link to="/">
            Eduardo<span>A</span>raujo
        </Link>
    </LogoElement>
)

export default Logo