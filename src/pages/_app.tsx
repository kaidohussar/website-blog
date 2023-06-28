import 'normalize.css'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Frame } from 'kaidohussar-ui'

import '@styles/main.scss'
import { useEffect } from 'react'

const StylesProvider = dynamic(
  () => import('kaidohussar-ui').then((mod) => mod.StylesProvider),
  { ssr: false },
)

export let isIntroAnimationChecked = true
export const setIntroAnimationChecked = () => (isIntroAnimationChecked = true)

const App = ({ Component, pageProps }: AppProps) => {
  const commonOverWrites = { fontFamily: "Poppins, 'sans-serif'" }

  useEffect(() => {
    console.log(
      "window.matchMedia('(max-width: 1100px)').matches",
      !!navigator.userAgent.match(/Android/i) ||
        !!window.matchMedia('(max-width: 1100px)').matches,
    )
    if (window !== undefined) {
      // @ts-ignore
      isIntroAnimationChecked = !!window.matchMedia('(max-width: 1100px)')
        .matches
    }
  }, [])

  return (
    <StylesProvider customThemes={[commonOverWrites, commonOverWrites]}>
      <Frame backgroundColor="backgroundColor" maxWidth="large" id="main-frame">
        <Component {...pageProps} />
      </Frame>
    </StylesProvider>
  )
}

export default App
