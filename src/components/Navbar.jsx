import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'gatsby'
import { NavbarContainer, MobileNav } from '../styles/components/NavbarContainer'
import { Button } from '../styles/components/Button'



const Navbar = props => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <>
            <NavbarContainer>
                <div className="logo">
                    <Logo />
                </div>

                <div className="navigation">
                    <Link className="navigation__item" to="/">Home</Link>
                    <Link className="navigation__item" to="/#about">About</Link>
                    <Link className="navigation__item" to="/tips">Tips</Link>
                    <Link className="navigation__item" to="/#contact">
                        <Button className="bg-hover">Let's chat</Button>
                    </Link>
                </div>

                <div className="hamburguer" onClick={() => setIsMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </NavbarContainer>

            <MobileNav isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
                <div className="close">+</div>
                <div className="items">
                    <Link className="navigation__item" to="/">Home</Link>
                    <Link className="navigation__item" to="/#about">About</Link>
                    <Link className="navigation__item" to="/tips">Tips</Link>
                    <Link className="navigation__item" to="/#contact">
                        <Button className="bg-hover">Let's chat</Button>
                    </Link>
                </div>
            </MobileNav>
        </>
    )
}

export default Navbar