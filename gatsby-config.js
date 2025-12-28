/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mario Stinson-Maas`,
    description: `Portfolio of Mario Stinson-Maas - Computer Science and Mathematics graduate from Oberlin College. Exploring projects in software development, mathematics, and music.`,
    siteUrl: `https://www.stinsonmaas.com`,
    author: `Mario Stinson-Maas`,
    image: `/seniorpic.jpg`,
    social: {
      github: `Mario730`,
      linkedin: `mario-stinson-maas-871912248`,
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mario Stinson-Maas Portfolio`,
        short_name: `MSM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#612785`,
        display: `standalone`,
        icon: `static/GitHublogo.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
