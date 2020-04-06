import React from 'react'
import Logo from './Logo'
import { Button } from '../styles/components/Button'
import { theme } from '../styles/theme'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: ${theme.containerL};
    top: 3rem;

    .navigation {
        .navigation__item {
            color: ${theme.white};
            font-size: 1.7rem;
            font-weight: 700;
            margin:0 2rem;

            &:last-child {
                margin:0 ;
            }
        }
    }
`

const Navbar = props => (
    <NavbarContainer>
        <div className="logo">
            <Logo />
        </div>

        <div className="navigation">
            <a className="navigation__item" href="">Home</a>
            <a className="navigation__item" href="">About</a>
            <a className="navigation__item" href="">Tips</a>
            <a className="navigation__item" href=""><Button>Let's chat</Button></a>
        </div>
    </NavbarContainer>
)

export default Navbar