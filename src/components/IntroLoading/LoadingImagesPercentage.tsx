import React, { useEffect, useRef, useState } from 'react'
import { animate, motion } from 'framer-motion'
import styles from '@styles/modules/loadingImagesPercentage.module.scss'

type Props = {
  imagesLoaded: boolean
  onImagesLoadedAnimCompleted: () => void
}

const LoadingImagesPercentage = ({
  imagesLoaded,
  onImagesLoadedAnimCompleted,
}: Props) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [animStatus, setAnimStatus] = useState<'idle' | 'paused' | 'completed'>(
    'idle',
  )

  useEffect(() => {
    const controls = animate(0, 99, {
      duration: 3,
      ease: 'easeInOut',
      onUpdate(value) {
        if (nodeRef.current) {
          const val = Math.round(value)
          nodeRef.current.textContent = `${val.toString()}`
        }
      },
      onComplete() {
        setAnimStatus('completed')
      },
    })

    return () => controls.stop()
  }, [onImagesLoadedAnimCompleted])

  useEffect(() => {
    if (animStatus === 'completed' && imagesLoaded) {
      nodeRef.current.textContent = `100%`
      onImagesLoadedAnimCompleted()
    }
  }, [animStatus, imagesLoaded, onImagesLoadedAnimCompleted])

  return (
    <motion.div
      key="loader"
      className={styles.percentageLoader}
      initial={{ opacity: 1 }}
      animate={imagesLoaded && animStatus === 'completed' && { opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.percentageTextWrapper}>
        <motion.div
          key="loader"
          initial={{ y: 0, opacity: 1 }}
          animate={
            imagesLoaded && animStatus === 'completed' && { y: -20, opacity: 0 }
          }
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          exit={{ y: -20, opacity: 0 }}
        >
          <span className={styles.percentage} ref={nodeRef} />
          <span>%</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingImagesPercentage
