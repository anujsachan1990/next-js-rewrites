
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  console.log('proxy is here');
  const authorization = req.cookies.get('authorization')
  return fetch('http://localhost:3000/test', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })

}

