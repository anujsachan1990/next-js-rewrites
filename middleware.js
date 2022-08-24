import { NextResponse } from 'next/server'


export async function middleware(req) {


  // Rewrite to the correct url

 const url = new URL(req.nextUrl.pathname, 'https://www.golf.org.au/')
console.log("test---->", url.href)

 return NextResponse.rewrite(url)
}