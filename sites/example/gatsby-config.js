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
    description: "Thesis-Arbeiten der HF Interaction Design Lehrgang 2017",
    siteUrl: "https://thesis.logrinto.ch"
  }
};
