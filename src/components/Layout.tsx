import Head from 'next/head'
import Navigation from './Navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import IntroLoading from '@components/IntroLoading'
import { motion, useAnimationControls } from 'framer-motion'

type Props = {
  children: any
}

const googleTrackingId = 'G-9DDQJQ0KZ1'

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const [loading, setIsLoading] = useState(false)
  const [isIntroAnimationChecked, setIsIntroAnimationChecked] = useState(false)
  const navAnimationControls = useAnimationControls()

  const { events } = useRouter()

  useEffect(() => {
    const handleSetLoading = (url) => {
      url !== router.asPath && setIsLoading(true)
    }
    const handleEndLoading = (url) => {
      url === router.asPath && setIsLoading(false)
    }

    events.on('routeChangeStart', handleSetLoading)
    events.on('routeChangeComplete', handleEndLoading)

    return () => {
      events.off('routeChangeStart', handleSetLoading)
      events.off('routeChangeComplete', handleEndLoading)
    }
  }, [events, router.asPath])

  return (
    <>
      <Head>
        <meta lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />

        {process.env.NODE_ENV === 'production' &&
          window.location.hostname === 'www.kaidohussar.dev' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${googleTrackingId}');
                `,
                }}
              />
            </>
          )}
      </Head>
      <motion.div
        animate={navAnimationControls}
        initial={{ y: -20, opacity: 0, pointerEvents: 'none', zIndex: 2 }}
      >
        <Navigation />
      </motion.div>
      <IntroLoading
        animationShown={isIntroAnimationChecked}
        onAnimationFinished={async () => {
          setIsIntroAnimationChecked(true)
          await navAnimationControls.start({
            y: -2,
            opacity: 1,
            pointerEvents: 'all',
            transition: {
              y: {
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1],
              },
            },
          })
        }}
        isLoadingPage={loading}
      >
        {children}
      </IntroLoading>
    </>
  )
}

export default Layout
