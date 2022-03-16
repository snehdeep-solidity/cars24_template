/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"

    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`cars`],
    },
  }]
};

