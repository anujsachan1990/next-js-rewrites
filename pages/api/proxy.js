
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let responseHeader = [];
  let requestHeader = [];

  console.log('cookies', req.cookies)
  req.headers.forEach((value, key) => {
    requestHeader.push({[key.toString()]: value })
})


console.log('requestHeader', requestHeader)

// requestHeader.replaceAll('.vercel.app', '.countryroad.com.au')
// requestHeader.replaceAll('next-js-rewrites-anuj.vercel.app', 'www.countryroad.com.au')

requestHeader.map((item) => {
  req.headers.set(item.key, item.value.replaceAll('.vercel.app', '.countryroad.com.au'))
  req.headers.set(item.key, item.value.replaceAll('next-js-rewrites-anuj.vercel.app', 'www.countryroad.com.au'))
})
//req.headers.set(':authority','www.countryroad.com.au')

console.log('requestHeaderModified', requestHeader)

const response = await fetch(`${process.env.REWRITE_HOST}${req.nextUrl.pathname}`, {
  method: req.method

})
console.log("response header--->")

response.headers.forEach((value, key) => {
  responseHeader.push({[key.toString()]: value })
  })

console.log('responseHeader', responseHeader)

responseHeader.map((item) => {
  response.headers.set(item.key, item.value.replaceAll('.countryroad.com.au', '.vercel.app'))
  response.headers.set(item.key, item.value.replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app'))
})

// responseHeader.replaceAll('.countryroad.com.au', '.vercel.app')
// responseHeader.replaceAll('www.countryroad.com.au', 'next-js-rewrites-anuj.vercel.app')

console.log('responseHeaderModified', responseHeader)

if (!!response.headers.get('content-type') && !['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {

  return response
}



const text = await response.text()
const modifiedtext = text.replaceAll(process.env.REWRITE_HOST, req.nextUrl.origin)
const { headers } = response
console.log("response headers", headers)
return new Response(modifiedtext, { headers })
}

