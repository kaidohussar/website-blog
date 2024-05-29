import styles from '@styles/modules/contentStorageBanner.module.scss'
import { ExternalLinkIcon } from '@src/assets/externalLink'

export default function ContentStorageBanner() {
  return (
    <div className={styles.root}>
      <a
        className={styles.link}
        href="https://contentstorage.app"
        target="_blank"
      >
        contentstorage.app
        <ExternalLinkIcon />
      </a>

      <h2>Check out my translations and assets manager</h2>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/promo.png"
        alt="contentstorage.app promotional image"
        width={635}
      />
    </div>
  )
}
