
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {

  console.log('cookies', req.cookies)

  const response = await fetch(`${process.env.REWRITE_HOST}${req.nextUrl.pathname}`, {
    method: req.method,

  })
  console.log("response header--->")

  forEach(response.headers, (value, key) => {

    console.log(key, ':', value)
  })

  if (!!response.headers.get('content-type') && !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {

    return response
  }



  const text = await response.text()
  const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
  const { headers } = response
  console.log("response headers", headers)
  return new Response(modifiedtext, { headers })
}

