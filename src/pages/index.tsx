import Layout from '@components/Layout'
import { Box, Button, Heading } from 'kaidohussar-ui'
import BasicMeta from '@components/meta/BasicMeta'
import OpenGraphMeta from '@components/meta/OpenGraphMeta'
import { SocialList } from '@components/SocialList'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@styles/modules/index.module.scss'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />

      <div className={styles.contentWrapper}>
        <motion.div
          animate={{ y: 0, opacity: 1, pointerEvents: 'all' }}
          initial={{ y: -20, opacity: 0, pointerEvents: 'none', zIndex: 2 }}
          className={styles.content}
        >
          <Box alignItems="center" justifyContent="center">
            <Box flexDirection="column" justifyContent="center">
              <Heading type="h1" size="xxxl" weight="bold" lineHeight="xs">
                Kaido Hussar
              </Heading>
              <Heading type="h2" size="lg">
                <span className={styles.subHeading}>
                  Problem-solver at heart, helping SaaS products get kickstarted
                </span>
              </Heading>

              <Button
                onClick={() =>
                  router.push('/services', undefined, { shallow: true })
                }
                className={styles.button}
                appearance="primary"
              >
                Check services
              </Button>
            </Box>
          </Box>
          <div role="contentinfo" className={styles.socialLinks}>
            <SocialList />
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Index
