
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {
  let responseHeader = [];
  let requestHeader = [];
  let requestModifiedHeader = [];
  let responseModifiedHeader = [];


  req.headers.forEach((value, key) => {
    requestHeader.push({ [key]: value })
  })


  console.log('requestHeader', requestHeader)

  // requestHeader.replaceAll('.vercel.app', '.countryroad.com.au')
  // requestHeader.replaceAll('next-js-rewrites-anuj.vercel.app', 'www.countryroad.com.au')

  requestHeader.map((item) => {
    req.headers.set(Object.keys(item)[0],
      item[Object.keys(item)[0]].replaceAll('.vercel.app', '.countryroad.com.au')
        .replaceAll('next-js-rewrites-anuj.vercel.app', 'www.countryroad.com.au'))

  })

  req.headers.forEach((value, key) => {
    requestModifiedHeader.push({ [key]: value })
  })

  console.log('requestModifiedHeader', requestModifiedHeader)



  const response = await fetch(`${process.env.REWRITE_HOST}${req.nextUrl.pathname}`, {
    method: req.method

  })
  console.log("response header--->")

  response.headers.forEach((value, key) => {
    responseHeader.push({ [key]: value })
  })

  console.log('responseHeader', responseHeader)

  responseHeader.map((item) => {

    if(Object.keys(item)[0]==='set-cookie'){
      response.headers.set(Object.keys(item)[0],
      item[Object.keys(item)[0]].replaceAll('.countryroad.com.au', '.vercel.app')
        .replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app'))  
    }
    // response.headers.set(Object.keys(item)[0],
    //   item[Object.keys(item)[0]].replaceAll('.countryroad.com.au', '.vercel.app')
    //     .replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app'))

  })

  response.headers.forEach((value, key) => {
    responseModifiedHeader.push({ [key]: value })
  })

  // responseHeader.replaceAll('.countryroad.com.au', '.vercel.app')
  // responseHeader.replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app')

  console.log('responseHeaderModified', responseModifiedHeader)

  if (!!response.headers.get('content-type') &&
    !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {
    return response
  }



  const text = await response.text()
  const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
  const { headers } = response
  console.log("response headers", headers)
  return new Response(modifiedtext, { headers })
}

