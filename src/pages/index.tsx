import Layout from '@components/Layout'
import { Box, Heading } from 'kaidohussar-ui'
import BasicMeta from '@components/meta/BasicMeta'
import OpenGraphMeta from '@components/meta/OpenGraphMeta'
import { SocialList } from '@components/SocialList'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@styles/modules/index.module.scss'

const Index = () => {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />

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
            <Heading type="h2" size="xl">
              Front-end developer
            </Heading>
            <Box top="lg">
              <SocialList />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Layout>
  )
}

export default Index
