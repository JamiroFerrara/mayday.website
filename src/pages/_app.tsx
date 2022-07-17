import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Script from 'next/script'
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../backend/router'
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core'

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

      <MantineProvider theme={{
        colorScheme: 'dark'
        }}>
        <NotificationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

function getBaseUrl() {
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */

    const url = `${getBaseUrl()}/api/trpc`;

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
