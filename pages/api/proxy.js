export const config = {
  runtime: 'experimental-edge',
}

export default async (req) => {
  const url = new URL(req.nextUrl.pathname, 'https://www.countryroad.com.au/')
  console.log("test---->", url.href)
  // Return rewrited path
  return NextResponse.rewrite(url)
}
