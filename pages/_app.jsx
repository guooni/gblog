import Head from 'next/head'
import '../styles/globals.css'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Guoyl's App</title>
        <meta name="description" content="Guoyl's first React App" />
      </Head>
      <Header />
      <div className='container m-auto max-w-2xl px-5'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
