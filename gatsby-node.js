/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  
  const team = require('./data/team.json')
  const programs = require('./data/programs.json').programs
  const partners = require('./data/partners.json').partners
  
  const { createPage } = actions

  team.forEach(member => {

    const slug = `${member.first}-${member.last}`.toLowerCase();

    createPage({
      path: `/team/${slug}`,
      component: require.resolve("./src/templates/team.js"),
      context: member,
      defer: false,
    })

  })

  programs.forEach((program, index) => {

    createPage({
      path: `/programs/${program.slug}`,
      component: require.resolve("./src/templates/program.js"),
      context: { ...program, index },
      defer: false,
    })

    if (program.pages == undefined) return;

    program.pages.forEach(page => {
      
      createPage({
        path: `/programs/${program.slug}/${page.slug}`,
        component: require.resolve("./src/templates/programPage.js"),
        context: { program, ...page, index },
        defer: false,
      })

    });

  })
  
  partners.forEach((partner, index) => {

    createPage({
      path: `/partnerships/${partner.slug}`,
      component: require.resolve("./src/templates/partner.js"),
      context: { ...partner, index },
      defer: false,
    })

  })

}
