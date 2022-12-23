/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fairfield Programming Association`,
    description: `Our mission is to educate high-school and college-aged (ages 14-22) individuals about computer science, engineering, and programming. To do this, we create educational resources, scholastic aptitude exams, programming competitions, and other events.`,
    author: `@fairfieldprogramming`,
    siteUrl: `https://about.fairfieldprogramming.org`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: false,
        sitemap: 'https://about.fairfieldprogramming.org/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fairfield Programming Association`,
        short_name: `fpa`,
        start_url: `/`,
        background_color: `#0F006C`,
        theme_color: `#0F006C`,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
