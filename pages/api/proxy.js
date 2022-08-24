export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  console.log('proxy is here');
  const x = fetch('http://localhost:3000/api/hello/', {
    method: req.method,
    redirect: 'manual',
  })
  console.log("xxxxddddddddd", x)
  return x

}
