import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Script from 'next/script'
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../backend/router'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* Google Analitics */}
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

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
