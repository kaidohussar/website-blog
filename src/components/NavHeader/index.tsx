import React, { ChangeEvent, HTMLAttributes } from 'react'
import styles from '@styles/modules/navHeader.module.scss'
import { Button } from 'kaidohussar-ui'
import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'

interface NavItem {
  title: string
  onClick: (e: ChangeEvent<EventTarget>) => void
  active?: boolean
}

export interface NavHeaderProps {
  /**
   * Navigation items
   */
  navItems: NavItem[]
  /**
   * Alignment
   */
  alignment?: 'left' | 'right'
  /**
   * Add on to display at the opposite side of nav items
   */
  addOn?: React.ReactNode
}

/**
 * Navigation header to display at the top of the page
 */

export const NavHeader: React.FC<
  NavHeaderProps & HTMLAttributes<HTMLUnknownElement> & HTMLMotionProps<'nav'>
> = ({ alignment = 'right', navItems, addOn, className, ...rest }) => (
  <motion.nav
    className={clsx(styles.root, className, {
      [styles.alignRight]: alignment === 'right',
      [styles.withAddon]: !!addOn,
    })}
    {...rest}
  >
    <div className={styles.navItems}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={clsx(styles.navItem, { [styles.active]: item.active })}
        >
          <Button
            onClick={(e) => {
              item.onClick(e)
            }}
            size="large"
            appearance="text"
          >
            {item.title}
          </Button>
        </div>
      ))}
    </div>
    {addOn && <div className={styles.addOn}>{addOn}</div>}
  </motion.nav>
)

NavHeader.displayName = 'NavHeader'
