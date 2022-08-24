export default function Home({ html }) {
  return (<div
    dangerouslySetInnerHTML={{
      __html: html
    }}></div>)
}

export async function getServerSideProps(context) {
 
  const x = await fetch('https://www.countryroad.com.au')
  const html = await x.text()
  console.log('response from proxy')
  return {
    props: {
      html: html.replaceAll('https://www.countryroad.com.au/','/')
    }, // will be passed to the page component as props
  }
}
