export const config = {
  runtime: 'experimental-edge',
}

export default async (req, res) => {
  const url = new URL(req.url, 'https://www.countryroad.com.au/')
  console.log("test---->", url.href)
  return res.rewrite(url)
}
