module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'https://www.countryroad.com.au/:slug*',
      }
    ]
  },
}