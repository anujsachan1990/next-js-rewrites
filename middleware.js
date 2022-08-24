import { NextResponse } from 'next/server'



export async function middleware(req) {

  // cont url = req.url

  // // Rewrite to the correct url

  // const url = new URL(req.nextUrl.pathname, 'https://www.countryroad.com.au/')
  // console.log("test---->", url.href)
  // // Return rewrited path
  // return NextResponse.rewrite(url)
}