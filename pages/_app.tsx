import '../styles/skeleton.css'
import '../styles/normalize.css'
import '../styles/globals.css'
import '../styles/code-editor.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
