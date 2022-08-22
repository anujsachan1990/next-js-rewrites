/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: '/',
      destination: 'https://www.countryroad.com.au/',
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
