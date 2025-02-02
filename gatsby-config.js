/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `symb62_23feb`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    // "gatsby-plugin-google-gtag", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};