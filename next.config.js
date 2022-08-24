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
  async rewrites() {
 
    return {
      fallback: [
        {
          source: '/:path*/',
          destination: `https://www.davidjones.com/:path*/`,
        },
        {
          source: '/:path*',
          destination: `https://www.davidjones.com/:path*`,
        }
      ],
    }
  },
}