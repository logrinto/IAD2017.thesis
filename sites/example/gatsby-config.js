module.exports = {
  pathPrefix: `/blog`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Blog',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
    description: 'A starter blog ...'
  },
};
