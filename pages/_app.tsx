import '../styles/skeleton.css'
import '../styles/normalize.css'
import '../styles/globals.css'
import '../styles/code-editor.css'

import type { AppProps } from 'next/app'
import { Layout } from '../common/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
