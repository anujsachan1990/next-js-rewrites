import { NextResponse } from 'next/server'
export const config = {
  runtime: 'experimental-edge',
}

export default async (req) => {
  const url = new URL(req.nextUrl.pathname, '/test/')
  console.log("test---->", url.href)
  // Return rewrited path
  return NextResponse.rewrite(url)
}
