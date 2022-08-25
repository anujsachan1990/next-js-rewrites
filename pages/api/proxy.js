
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  console.log('proxy is here');

  const response = await fetch(`https://www.golf.org.au${req.nextUrl.pathname}`, {
    method: req.method,
    redirect: 'manual',
  })
  if (!['html', 'css', 'javascript'].some((type) => response.headers.get('content-type').includes(type))) {
    return response
  }
  const text = await response.text()
  const modifiedtext = text.replaceAll('Latest News', 'anuj is here')
  const { headers } = response
  return new Response(modifiedtext, { headers })
}

