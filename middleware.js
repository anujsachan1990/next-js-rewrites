import { NextResponse } from 'next/server'

export const config = {
  matcher: '/about',
}

export async function middleware(req) {


  // Rewrite to the correct url

  const url = new URL(req.nextUrl.pathname, 'https://www.countryroad.com.au/')
  console.log("test---->", url.href)
  // Return rewrited path
  return NextResponse.rewrite(url)
}