import React from 'react'
import { LayoutWrapper } from '../styles/components/LayoutWrapper'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
    <LayoutWrapper>
        <Navbar />
        {children}
        <Footer />
    </LayoutWrapper>
)

export default Layout

