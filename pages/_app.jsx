import '../styles/globals.css'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className='container m-auto max-w-2xl px-5'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
