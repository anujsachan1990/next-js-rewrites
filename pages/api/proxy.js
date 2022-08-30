
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let responseHeader = '';
  let requestHeader = '';

  console.log('cookies', req.cookies)
  req.headers.forEach((value, key) => {
    requestHeader += `${key}: ${value}\n`
  })
  console.log('requestHeader', requestHeader)

  const response = await fetch(`${process.env.REWRITE_HOST}${req.nextUrl.pathname}`, {
    method: req.method,

  })
  console.log("response header--->")

  response.headers.forEach((value, key) => {
    responseHeader += `${key}: ${value}\n`
  })

  console.log('responseHeader', responseHeader)


  if (!!response.headers.get('content-type') && !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {

    return response
  }



  const text = await response.text()
  const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
  const { headers } = response
  console.log("response headers", headers)
  return new Response(modifiedtext, { headers })
}

