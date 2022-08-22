/** @type {import('next').NextConfig} */

const rewrites = async() => {
  return [
    {
      source: '/test',
      destination: '/',
    },
  ]
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites
}


module.exports = nextConfig
