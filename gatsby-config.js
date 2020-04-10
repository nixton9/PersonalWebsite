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
    url: "https://www.eduardoaraujo.com",
    image: "https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586369866/webdevtips_oia3w7.png",
    twitterUsername: "@eddaraujo9",
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Muli`,
              variants: [`400`, `700`, `800`]
            }
          ],
        },
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
                ratio: 1, // Optional: Defaults to 16/9 = 1.77
                related: false,
                noIframeBorder: true, //Optional: Disable insertion of <style> border: 0,
                autoplay: true
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
