
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let responseHeader = '';
  let responseHeaderModified = '';
  let requestHeader = '';
  let requestHeaderModified = '';

  console.log('cookies', req.headers)
  req.headers.forEach((value, key) => {
    requestHeader += `${key}: ${value}\n`
  })
  console.log('requestHeader', requestHeader)

  requestHeaderModified = requestHeader.replaceAll('.vercel.app', '.countryroad.com.au').replaceAll('next-js-rewrites-anuj.vercel.app', 'www.countryroad.com.au')


  console.log('requestHeaderModified', requestHeaderModified)

  const response = await fetch(`${process.env.REWRITE_HOST}${req.nextUrl.pathname}`, {
    method: req.method,
  })
  console.log("response header--->")

  response.headers.forEach((value, key) => {
    responseHeader += `${key}: ${value}\n`
  })

  console.log('responseHeader', responseHeader)


  responseHeaderModified = responseHeader.replaceAll('.countryroad.com.au', '.vercel.app').replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app')


  console.log('responseHeaderModified', responseHeaderModified)

  if (!!response.headers.get('content-type') && !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {

    return response
  }



  const text = await response.text()
  const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
  const { headers } = response
  console.log("response headers", headers)
  return new Response(modifiedtext, { headers })
}

