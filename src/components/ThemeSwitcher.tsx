import React, { useEffect, useRef } from 'react'
import styles from '@styles/modules/themeSwitcher.module.scss'
import { useTheme } from 'kaidohussar-ui'
import { motion, useAnimate } from 'framer-motion'

const ThemeSwitcher: React.FC = () => {
  const isMounted = useRef(false)

  const { setTheme, theme } = useTheme()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (theme === 'light') {
      animate('#moon', { x: 0, opacity: 1 })
      animate('#sun', { x: -20, opacity: 0 })
    }

    if (theme === 'dark') {
      animate('#sun', { x: 0, opacity: 1 })
      animate('#moon', { x: 20, opacity: 0 })
    }

    isMounted.current = true
  }, [animate, scope, theme])

  return (
    <button
      className={styles.root}
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      ref={scope}
    >
      <motion.svg
        initial={{ x: !isMounted.current ? 0 : 20, opacity: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="moon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        initial={{ x: !isMounted.current ? 0 : -20, opacity: 0 }}
        id="sun"
      >
        <circle cx="12" cy="12" r="6" fill="currentColor" />
        <g stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </motion.svg>
    </button>
  )
}

export default ThemeSwitcher
