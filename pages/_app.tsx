import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'  //この行を追加


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
