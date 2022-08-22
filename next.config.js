/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: '/',
      destination: '/test',
      permanent: true,
    },
  ]
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites
}


module.exports = nextConfig
