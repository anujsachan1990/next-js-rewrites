export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {

  const url = new URL(req.url, 'https://www.countryroad.com.au/')
  console.log("test---->", url.href)
  // Return rewrited path
  return res.rewrite(url) // NextResponse.rewrite(url)
  

}
