import { GlobalStyle } from '@/presentation/styles/global'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { Default } from '@/presentation/styles/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
