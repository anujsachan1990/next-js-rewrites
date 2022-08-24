export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {



  console.log('proxy is here');
  const x = fetch('https://www.countryroad.com.au', {
    method: req.method,
    redirect: 'manual',
    credentials: 'include'
  })

  return x

}
