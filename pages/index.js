export default function Home({ html }) {
  return (
  <>
  a simple text from the component
  <div
    dangerouslySetInnerHTML={{
      __html: html
    }} style={{"height": "100vh"}}></div>
    </>)
}

export async function getServerSideProps(context) {
 
  const x = await fetch('https://next-js-rewrites-anuj.vercel.app/api/proxy/')
  console.log('fetch', x)
  const html = await x.text()
  console.log('response from proxy', html)
  console.log(html)
  return {
    props: {
      html: html
    }, // will be passed to the page component as props
  }
}
