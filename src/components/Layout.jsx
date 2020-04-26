import React, { useEffect } from 'react'
import { LayoutWrapper } from '../styles/components/LayoutWrapper'
import Navbar from './Navbar'
import Footer from './Footer'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const Layout = ({ children }) => {
    
    useEffect(() => {
        deckDeckGoHighlightElement()
    }, [])

    return (
        <LayoutWrapper>
            <Navbar />
            {children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout

