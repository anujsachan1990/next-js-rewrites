export default function Home({ html }) {
  return (<div
    dangerouslySetInnerHTML={{
      __html: html
    }}></div>)
}

export async function getServerSideProps(context) {
  const { req } = context;

  const x = await fetch('https://next-js-rewrites-anuj.vercel.app/api/proxy/')
  const html = await x.text()
  console.log('response from proxy')
  return {
    props: {
      html: html.replaceAll('https://www.countryroad.com.au/','/')
    }, // will be passed to the page component as props
  }
}
