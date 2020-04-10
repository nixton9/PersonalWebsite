import React from "react"
import SchemaOrg from './SchemaOrg'
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import favicon from '../assets/favicon.ico'

const SEO = ({ title, description, image, pathname, article, lang }) => (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
            author
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: article ? image : `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        }
        const organization = {
          url: `${pathname || '/'}`,
          logo: 'https://res.cloudinary.com/duejrcpct/image/upload/v1586452991/eduardoaraujo_yoaksn.png',
          name: 'Eduardo Araújo'
        }
        return (
            <>
                <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{lang}}>
                    <meta name="description" content={seo.description} />
                    <meta name="image" content={seo.image} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {(article ? true : null) && (
                    <meta property="og:type" content="article" />
                    )}
                    {seo.title && <meta property="og:title" content={seo.title} />}
                    {seo.description && (
                    <meta property="og:description" content={seo.description} />
                    )}
                    {seo.image && <meta property="og:image" content={seo.image} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    {twitterUsername && (
                    <meta name="twitter:creator" content={twitterUsername} />
                    )}
                    {seo.title && <meta name="twitter:title" content={seo.title} />}
                    {seo.description && (
                    <meta name="twitter:description" content={seo.description} />
                    )}
                    {seo.image && <meta name="twitter:image" content={seo.image} />}
                    <link rel="icon" href={favicon} />
                    <SchemaOrg 
                      author={author}
                      canonicalUrl={`${siteUrl}${pathname || '/'}`}
                      title={title || defaultTitle}
                      description={description || defaultDescription}
                      image={`${siteUrl}${image || defaultImage}`}
                      isBlogPost={article}
                      url={`${siteUrl}${pathname || '/'}`}
                      organization={organization}
                    />
                </Helmet>
            </>
        )
      }}
    />
  )
  export default SEO


const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
  author: PropTypes.string,
}
SEO.defaultProps = {
  title: 'Home',
  description: "I'm a Web Developer from Portugal. Come get to know me a bit!",
  image: null,
  pathname: null,
  article: false,
  lang: 'en',
  author: 'Eduardo Araújo',
}