import styles from '@styles/modules/contentStorageBanner.module.scss'
import { ExternalLinkIcon } from '@src/assets/externalLink'

export default function ContentStorageBanner() {
  return (
    <div className={styles.root}>
      <h2>Check out my CMS for web apps</h2>
      <a
        className={styles.link}
        href="https://contentstorage.app"
        target="_blank"
      >
        contentstorage.app
        <ExternalLinkIcon />
      </a>
    </div>
  )
}
