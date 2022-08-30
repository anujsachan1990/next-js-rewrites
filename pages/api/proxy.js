
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let responseHeader = [];
  let requestHeader = [];
  let requestModifiedHeader = [];
  let responseModifiedHeader = [];


  req.headers.forEach((value, key) => {
    requestHeader.push({ [key]: value })
  })


  console.log('requestHeader', requestHeader)



  requestHeader.map((item) => {
    req.headers.set(Object.keys(item)[0],
      item[Object.keys(item)[0]].replaceAll(process.env.VERCEL_URL, 'www.countryroad.com.au')
        .replaceAll('.vercel.app', '.countryroad.com.au'))

  })

  req.headers.forEach((value, key) => {
    requestModifiedHeader.push({ [key]: value })
  })

  console.log('requestModifiedHeader', requestModifiedHeader)


  console.log('next url', req.nextUrl);
  const newUrl = `${req.nextUrl.pathname}${req.nextUrl.search}`;
  const response = await fetch(`${process.env.REWRITE_HOST}${newUrl}`, {
    method: req.method

  })
  console.log("response header--->")

  response.headers.forEach((value, key) => {
    responseHeader.push({ [key]: value })
  })

  console.log('responseHeader', responseHeader)

  const myHeaders = new Headers();

  responseHeader.map((item) => {


    myHeaders.set(Object.keys(item)[0],
      item[Object.keys(item)[0]].replaceAll('www.countryroad.com.au', process.env.VERCEL_URL)
        .replaceAll('.countryroad.com.au', process.env.VERCEL_URL)
    )

  })

  myHeaders.forEach((value, key) => {
    responseModifiedHeader.push({ [key]: value })
  })



  console.log('responseHeaderModified', responseModifiedHeader)

  if (!!response.headers.get('content-type') &&
    !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {
    return response
  }



  const text = await response.text()
  const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
  const { headers } = response
  console.log("response headers", headers)
  return new Response(modifiedtext, { headers: myHeaders })
}

