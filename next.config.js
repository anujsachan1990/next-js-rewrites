module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
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
        source: '/:slug*/',
        destination: 'https://www.countryroad.com.au/:slug*/',
      },
      {
        source: '/:path*/',
        destination: 'https://www.countryroad.com.au/:path*/',
      }
    ]
  },
}