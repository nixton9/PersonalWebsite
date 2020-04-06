/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-remark`,
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
          ],
        },
      },
    ],
}
