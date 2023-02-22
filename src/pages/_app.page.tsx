import { globalStyles } from '@/styles/globals'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://amaral-call.amaral.com/',
          siteName: 'Amaral Call',
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
