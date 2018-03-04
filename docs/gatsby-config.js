module.exports = {
  siteMetadata: {
    title: 'Redux Saga Firebase',
    docsDirectory: 'docs',
    github: {
      package: 'n6g7 / redux-saga-firebase',
      url: 'https://github.com/n6g7/redux-saga-firebase'
    },
    npm: {
      package: 'redux-saga-firebase',
      url: 'https://www.npmjs.com/package/redux-saga-firebase'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/guides`,
        name: 'guides'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/reference`,
        name: 'reference'
      }
    },
    'gatsby-transformer-remark'
  ]
}