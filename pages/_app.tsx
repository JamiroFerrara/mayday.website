import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy='lazyOnload' src='https://www.googletagmanager.com/gtag/js?id=G-BEET688L2W'/>
      <Script strategy='lazyOnload'>
        {
          `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-BEET688L2W');
          `
        }
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
