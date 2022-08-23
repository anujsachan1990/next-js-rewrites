module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:slug*/',
  //       destination: 'https://www.countryroad.com.au/:slug*/',
  //     },
  //     {
  //       source: '/:slug*',
  //       destination: 'https://www.countryroad.com.au/:slug*',
  //     }
  //   ]
  // },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:slug*',
          destination: `https://www.countryroad.com.au/:slug*`,
        },
        {
          source: '/:slug*/',
          destination: `https://www.countryroad.com.au/:slug*/`,
        },
      ],
    }
  },
}