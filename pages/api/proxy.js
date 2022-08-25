
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  console.log('proxy is here');

  const response = await fetch(`https://www.countryroad.com.au${req.nextUrl.pathname}`, {
    method: req.method,
    redirect: 'manual',
  })

  return response
}

