import React, { useCallback, useEffect, useRef, useState } from 'react'
import { animate, motion, motionValue, useMotionValue } from 'framer-motion'
import styles from '@styles/modules/introLoading.module.scss'

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
    const controls = animate(0, 100, {
      duration: 3,
      ease: 'easeInOut',
      onUpdate(value) {
        if (nodeRef.current) {
          const val = Math.round(value)
          if (!imagesLoaded && val === 100) {
            controls.pause()
          } else if (
            imagesLoaded &&
            val === 100 &&
            animStatus !== 'completed'
          ) {
            onImagesLoadedAnimCompleted()
          } else {
            nodeRef.current.textContent = `${val.toString()}%`
          }
        }
      },
      onComplete() {
        setAnimStatus('completed')
      },
    })

    return () => controls.stop()
  }, [animStatus, imagesLoaded, onImagesLoadedAnimCompleted])

  useEffect(() => {
    if (animStatus === 'paused' && imagesLoaded) {
      nodeRef.current.textContent = `100%`
      setAnimStatus('completed')
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
          ref={nodeRef}
          key="loader"
          initial={{ y: 0, opacity: 1 }}
          animate={
            imagesLoaded && animStatus === 'completed' && { y: -20, opacity: 0 }
          }
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          exit={{ y: -30, opacity: 0 }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingImagesPercentage
