module.exports = {
  trailingSlash: true,
  // basePath: '',
  // reactStrictMode: true,

  // trailingSlash: true,
  // // async rewrites() {
  // //   return [
  // //     {
  // //       source: '/:slug*/',
  // //       destination: 'https://www.countryroad.com.au/:slug*/',
  // //     },
  // //     {
  // //       source: '/:slug*',
  // //       destination: 'https://www.countryroad.com.au/:slug*',
  // //     }
  // //   ]
  // // },
  headers: [
    {
      key: 'cookie',
      value: 'visid_incap_2179657=TQkQqgNoS2S4aAxVWqpp/JL0AmMAAAAAQUIPAAAAAADYKSD82ucL5fJzGLRJE1d9; incap_ses_362_2179657=L4v9FvrejkqzvzuDMIwGBXwSBGMAAAAAGNsxAzPeyqXXYU87da4A4w==; incap_ses_972_2179657=zvxmAKJ2jGYzJxBxgT59Ded1BWMAAAAABBAD+LYQ7zj8c4fd4tapOg==; incap_ses_971_2179657=9CtTN5+E0wvYpxlvALF5DS7TBWMAAAAAY+0TR82G9escy5lAhGIdjg==;',
    },
  ],
  async rewrites() {
 
    return {
      fallback: [
        {
          source: '/:path*/',
          destination: `https://www.countryroad.com.au/:path*/`,
        },
        {
          source: '/:path*',
          destination: `https://www.countryroad.com.au/:path*`,
        }
      ],
    }
  },
}