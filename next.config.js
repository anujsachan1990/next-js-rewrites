module.exports = {
  async rewrites() {
    return [
      {
        source: '/test',
        destination: 'https://www.countryroad.com.au',
      }
    ]
  },
}