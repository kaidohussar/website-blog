import Layout from '@components/Layout'
import { Box, Heading } from 'kaidohussar-ui'
import BasicMeta from '@components/meta/BasicMeta'
import OpenGraphMeta from '@components/meta/OpenGraphMeta'
import { SocialList } from '@components/SocialList'
import IntroLoading from '@components/IntroLoading'
import React, { useEffect } from 'react'
import { useAnimationControls } from 'framer-motion'
import { Navigation } from '@components/Navigation'

const Index = () => {
  const navAnimationControls = useAnimationControls()

  const content = (
    <Box
      alignItems="center"
      justifyContent="center"
      cssProps={{
        height: '100%',
        // @ts-ignore
        transform: window.isIntroAnimationChecked
          ? 'translateY(-100px)'
          : undefined,
      }}
    >
      <Box flexDirection="column" justifyContent="center">
        <Heading type="h1" size="xxxl" weight="bold" lineHeight="xs">
          Kaido Hussar
        </Heading>
        <Heading type="h2" size="xl">
          Front-end developer
        </Heading>
        <Box top="lg">
          <SocialList />
        </Box>
      </Box>
    </Box>
  )

  return (
    <Layout>
      {
        // @ts-ignore
        !window.isIntroAnimationChecked && (
          <Navigation
            animate={navAnimationControls}
            initial={{ y: -20, opacity: 0, pointerEvents: 'none', zIndex: 2 }}
          />
        )
      }
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />

      {
        // @ts-ignore
        window.isIntroAnimationChecked ? (
          content
        ) : (
          <IntroLoading
            onAnimationFinished={async () => {
              // @ts-ignore
              window.isIntroAnimationChecked = true
              await navAnimationControls.start({
                y: 0,
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
          >
            {content}
          </IntroLoading>
        )
      }
    </Layout>
  )
}

export default Index
