import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from '@styles/modules/displayReadPercentage.module.scss'
import { useEffect } from 'react'

type Props = {
  percentage: number
  isHidden: boolean
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-100%' },
}

const DisplayReadPercentage = ({ percentage, isHidden }: Props) => {
  const input = [0, 100]
  const output = [0, 1]
  const x = useMotionValue(percentage)
  const xTransformed = useTransform(x, input, output)

  const scaleX = useSpring(xTransformed, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    x.set(percentage)
  }, [percentage, x])

  return (
    <div className={styles.container}>
      <motion.div
        variants={variants}
        className={styles.progressBar}
        style={{ scaleX }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      />
    </div>
  )
}

export default DisplayReadPercentage
