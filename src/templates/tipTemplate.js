import React, { Component } from 'react'
import Layout from '../components/Layout'
import { SingleTipContainer } from '../styles/components/SingleTipContainer'
import { SecondaryTitle } from '../styles/components/SecondaryTitle'
import { Spacing } from '../styles/components/Spacing'
import { graphql } from 'gatsby'
import { formatLanguages } from '../utils/formatLanguages'

class Template extends Component {

  async componentDidMount() {
    try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
    
        await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
        console.error(err);
    }
  }

  render () {
    const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
      <Layout>
        <SingleTipContainer className="tip">

          <Spacing />

          <SecondaryTitle>{frontmatter.title}</SecondaryTitle>

          <div className="tip__meta">
            <h3 className="purple">{formatLanguages(frontmatter.languages)}</h3>
            <h3>{frontmatter.date}</h3>
          </div>

          <div
            className="tip__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

        </SingleTipContainer>
      </Layout>
    )
  }
}

export default Template


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        languages
        img
        number
      }
    }
  }
`