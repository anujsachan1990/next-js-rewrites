module.exports = {
  basePath: 'https://next-js-rewrites-anuj.vercel.app',
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