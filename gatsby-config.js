/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Eduardo Araújo",
    titleTemplate: "%s · Eduardo Araújo",
    description:
      "Web Developer from Portugal. And I love to share tips!",
    url: "https://www.eduardo-araujo.com",
    siteUrl: "https://www.eduardo-araujo.com",
    image: "https://res.cloudinary.com/duejrcpct/image/upload/v1586452991/eduardoaraujo_yoaksn.png",
    twitterUsername: "@eddaraujo9",
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `limelight`,
            `Muli\:400,700,800`
          ],
          display: 'swap'
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/src/posts`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-highlight-code`
            },
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                ratio: 1,
                related: false,
                noIframeBorder: true,
                autoplay: true
              }
            },
            {
              resolve: `gatsby-remark-images-native-lazy-load`,
              options: {
                  loading: "lazy"
                  }
            }
          ],
        },
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          color: `#4605FF`,
          showSpinner: false,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: ``,
        },
      }
    ],
}
