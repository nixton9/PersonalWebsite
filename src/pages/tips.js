import React, { useState } from 'react'
import TipMiniature from '../components/TipMiniature'
import Layout from '../components/Layout'
import { TipsContainer } from '../styles/components/TipsContainer'
import { MainTitle } from '../styles/components/MainTitle'
import { SubTitle } from '../styles/components/SubTitle'
import { SoftElement } from '../styles/components/SoftElement'
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
        <TipsContainer className="tips">

          <div className="tips__header">

            <MainTitle>web dev tips</MainTitle>
            <SubTitle>Simple and handy Web Dev related tips on HTML, CSS, JS and React</SubTitle>

            <div className="tips__form">
              <SoftElement className="form-wrapper">
                <input 
                  type="text"
                  placeholder="search tips..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <img src={lupa} />
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
          }
        }
      }
    }
  }
`