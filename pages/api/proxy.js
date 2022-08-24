
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  console.log('proxy is here');
  const authorization = req.cookies.get('authorization')
  return fetch('https://www.countryroad.com.au/', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })

}

