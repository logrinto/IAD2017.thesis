module.exports = {
  pathPrefix: `/blog`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Thesis IAD2017',
    author: 'Schule für Gestaltung Zürich',
    authorUrl: 'http://signalwerk.ch/',
    description: 'A starter blog ...'
  },
};
