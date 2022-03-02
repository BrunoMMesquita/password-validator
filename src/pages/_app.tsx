import { GlobalStyle } from '@/Presentation/styles/global'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { Default } from '@/Presentation/styles/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
