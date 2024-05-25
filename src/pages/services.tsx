import Layout from '@components/Layout'
import MetaData from '@components/meta/MetaData'
import { motion } from 'framer-motion'
import styles from '@styles/modules/services.module.scss'
import React from 'react'
import ServicesList from '@components/ServicesList'
import { SocialList } from '@components/SocialList'

export default function Index() {
  const url = '/services'
  const title = 'Services'
  return (
    <Layout>
      <MetaData url={url} title={title} />

      <motion.div
        animate={{ y: 0, opacity: 1, pointerEvents: 'all' }}
        initial={{ y: -20, opacity: 0, pointerEvents: 'none', zIndex: 2 }}
        className={styles.content}
      >
        <h1 className={styles.heading}>Services</h1>
        <ServicesList className={styles.servicesList} />

        <div className={styles.contact}>
          <SocialList />
          <span>kaidohus@gmail.com</span>
        </div>
      </motion.div>
    </Layout>
  )
}
