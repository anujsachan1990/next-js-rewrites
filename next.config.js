module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://www.countryroad.com.au',
      }
    ]
  },
}