import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { FourOFourContainer } from '../styles/components/FourOFourContainer'
import { MainTitle } from '../styles/components/MainTitle'
import { SubTitle } from '../styles/components/SubTitle'
import nothingtosee from '../assets/nothingtosee.svg'

const FourOFour = () => {
    return (
        <Layout>
            <FourOFourContainer>
                <SubTitle small>Oops, seems like this page doesn’t exist. Head back to the homepage <span><Link to="/">here</Link></span>.</SubTitle>
                <div className="illustration">
                    <img src={nothingtosee} alt="Nothing to see here!" />
                </div>
            </FourOFourContainer>
        </Layout>
    )
}

export default FourOFour