module.exports = {
  pathPrefix: `/`,

  __experimentalThemes: [
    {
      resolve: "gatsby-theme-signalwerk",
      options: {
        root: __dirname
      }
    }
  ],

  siteMetadata: {
    title: "Thesis IAD2017",
    author: "Schule für Gestaltung Zürich",
    authorUrl: "https://sfgz.ch/",
    description: "A starter blog ...",
    siteUrl: "https://thesis.logrinto.ch"
  }
};
