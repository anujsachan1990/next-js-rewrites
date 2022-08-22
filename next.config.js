module.exports = {
  async rewrites() {
    return [
      { "source": "(.*)", "destination": "https://example.com/bruno$1" }
    ]
  },
}