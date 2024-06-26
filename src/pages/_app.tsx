import 'normalize.css'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Frame } from 'kaidohussar-ui'

import '@styles/main.scss'
import React from 'react'
import ThemeSwitcher from '@components/ThemeSwitcher'

const StylesProvider = dynamic(
  () => import('kaidohussar-ui').then((mod) => mod.StylesProvider),
  { ssr: false },
)

const App = ({ Component, pageProps }: AppProps) => {
  const commonOverWrites = { fontFamily: "Poppins, 'sans-serif'" }

  return (
    <StylesProvider customThemes={[commonOverWrites, commonOverWrites]}>
      <Frame backgroundColor="backgroundColor" maxWidth="large" id="main-frame">
        <Component {...pageProps} />
        <ThemeSwitcher />
      </Frame>
    </StylesProvider>
  )
}

export default App
