export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {

  console.log('proxy is here');
  const x = fetch('https://www.countryroad.com.au', {
    method: req.method,
    redirect: 'manual',
  })

  return x

}
