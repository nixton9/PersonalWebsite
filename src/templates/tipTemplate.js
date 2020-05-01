import React, { Component } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { SingleTipContainer } from '../styles/components/SingleTipContainer'
import { SecondaryTitle } from '../styles/components/SecondaryTitle'
import { Spacing } from '../styles/components/Spacing'
import { graphql } from 'gatsby'
import { formatLanguages } from '../utils/formatLanguages'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

class Template extends Component {

  componentDidMount() {
    deckDeckGoHighlightElement()
    const video = document.querySelector('iframe')
    if(video) {
      this.addAutoplayToVideos(video)
      video.setAttribute('title', this.props.data.markdownRemark.frontmatter.title);
    }
  }

  addAutoplayToVideos = (video) => {
    const srcAttr = video.getAttribute('src')
    const videoID = this.getVideoID(srcAttr)
    video.setAttribute('src', `${srcAttr}&autoplay=1&loop=1&playlist=${videoID}&showinfo=0&iv_load_policy=3&controls=0`)
  }

  getVideoID = (src) => {
    var match = src.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
    return (match&&match[7].length==11)?match[7]:false;
  }

  render () {
    const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
      <Layout>

        <SEO 
          title={`WebDev Tips . ${frontmatter.title}`}
          description={frontmatter.description}
          image={frontmatter.img}
          pathname={frontmatter.path}
          article={true}
        />

        <SingleTipContainer className="tip">

          <Spacing className="empty-space"/>

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
        description
        img
        number
      }
    }
  }
`