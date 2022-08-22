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
        source: '/blog',
        destination: 'https://www.countryroad.com.au/',
      }
    ]
  },
}