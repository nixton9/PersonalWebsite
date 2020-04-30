import React, { useState } from 'react'
import TipMiniature from '../components/TipMiniature'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { TipsContainer } from '../styles/components/TipsContainer'
import { MainTitle } from '../styles/components/MainTitle'
import { SubTitle } from '../styles/components/SubTitle'
import { SoftElement } from '../styles/components/SoftElement'
import { Instagram } from '../components/icons/Instagram'
import { Twitter } from '../components/icons/Twitter'
import { Mail } from '../components/icons/Mail'
import { graphql } from 'gatsby'
import lupa from '../assets/lupa.svg'

const Tips = ({ data: { allMarkdownRemark: { edges } } }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const allTips = edges.filter(edge => edge.node.frontmatter.status)
                       .filter(edge => (
                          edge.node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          edge.node.frontmatter.number.toString().includes(searchQuery) ||
                          edge.node.frontmatter.languages.map(l => l.toLowerCase()).includes(searchQuery.toLowerCase())
                       ))
                       .map(edge => <TipMiniature key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <SEO 
          title={'WebDev Tips'} 
          description={'Handy Web Dev related tips on HTML, CSS, JS, React, etc.'} 
          pathname={'/tips'}
          image={'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588268735/banner-twitter_y928lx.png'}
        />
        <TipsContainer className="tips">

          <div className="tips__header">

            <MainTitle>web dev tips</MainTitle>
            <SubTitle>Simple and handy Web Dev related tips on HTML, CSS, JS, React and more!</SubTitle>

            <div className="tips__icons">
              <a href="https://www.instagram.com/webdev.tips/" className="fill-hover" target="_blank" rel="noopener" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com/webdevtips_" className="fill-hover" target="_blank" rel="noopener" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="mailto:webdevtips9@gmail.com" className="fill-hover" target="_blank" rel="noopener" aria-label="Email">
                <Mail />
              </a>
            </div>

            <div className="tips__form">
              <SoftElement className="form-wrapper">
                <input 
                  type="text"
                  placeholder="search tips..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <img src={lupa} alt="Seach glass"/>
              </SoftElement>
            </div>

          </div>

          <div className="tips__content">
            {
              allTips.length > 0 ? 
                allTips 
              : 
                <p className="no-data">There are no tips with this criteria, try using a different query.</p>
            }
          </div>

        </TipsContainer>
    </Layout>
  )
}

export default Tips


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___number] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            img
            number
            status
            languages
            description
          }
        }
      }
    }
  }
`