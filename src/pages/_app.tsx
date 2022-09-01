import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }:AppProps) {
  return <ThemeProvider theme={{
    color:'red',
    fontSize:'40px'
  }}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
