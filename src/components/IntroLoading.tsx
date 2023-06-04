import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import styles from '@styles/modules/introLoading.module.scss'
import Image from 'next/image'

type Props = {
  children: React.ReactElement
  isLoadingPage: boolean
}

type ColumnImages = (string | 'content')[]

const COLUMN1_IMAGES: ColumnImages = [
  '/intro-images/boat.webp',
  '/intro-images/boat.webp',
  '/intro-images/boat.webp',
  '/intro-images/boat.webp',
]
const COLUMN2_IMAGES: ColumnImages = [
  '/intro-images/stairs.webp',
  '/intro-images/stairs.webp',
  '/intro-images/stairs.webp',
  '/intro-images/stairs.webp',
]
const COLUMN3_IMAGES: ColumnImages = [
  '/intro-images/vase.webp',
  'content',
  '/intro-images/vase.webp',
]
const COLUMN4_IMAGES: ColumnImages = [
  '/intro-images/vase2.webp',
  '/intro-images/vase2.webp',
  '/intro-images/vase2.webp',
  '/intro-images/vase2.webp',
]
const COLUMN5_IMAGES: ColumnImages = [
  '/intro-images/image.webp',
  '/intro-images/image.webp',
  '/intro-images/image.webp',
  '/intro-images/image.webp',
]

const COLUMNS = [
  COLUMN1_IMAGES,
  COLUMN2_IMAGES,
  COLUMN3_IMAGES,
  COLUMN4_IMAGES,
  COLUMN5_IMAGES,
]

const IMG_TOTAL_COUNT = COLUMNS.length * COLUMN1_IMAGES.length - 1

const COLUMN_DELAY_MAP = {
  0: {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
  },
  1: {
    0: 0.5,
    1: 2,
    2: 3.5,
    3: 4.6,
  },
  2: {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
  },
  3: {
    0: 0.5,
    1: 2,
    2: 3.5,
    3: 4.6,
  },
  4: {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
  },
}

const MOVE_PERCENTAGE_FROM_TOP = {
  0: 0.75,
  1: 0.5,
  2: 0.25,
  3: 0,
}

const MOVE_PERCENTAGE_FROM_BOTTOM = {
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 0.75,
}

const MOVE_PERCENTAGE_FROM_BOTTOM_CONTENT_COLUMN = {
  0: 0.25,
  1: 0.5,
  2: 0.75,
  3: 0,
}

const CONTENT_COLUMN_IDX = 2
const CONTENT_IMG_IDX = 2

const IntroLoading = ({ children, isLoadingPage }: Props) => {
  const rootRef = useRef(null)
  const columnRef = useRef(null)
  const [loadingPercentage, setLoadingPercentage] = useState(
    100 / IMG_TOTAL_COUNT,
  )

  const handleImageLoaded = () => {
    setLoadingPercentage((prevState) => {
      return prevState + 100 / IMG_TOTAL_COUNT
    })
  }

  const imagesLoaded = Math.round(loadingPercentage) === 100

  const getVerticalMovePx = (columnIdx, imageIdx) => {
    if (columnIdx === CONTENT_COLUMN_IDX) {
      return (
        document.body.offsetHeight *
        -1 *
        MOVE_PERCENTAGE_FROM_BOTTOM_CONTENT_COLUMN[imageIdx]
      )
    }

    return columnIdx % 2
      ? document.body.offsetHeight * MOVE_PERCENTAGE_FROM_TOP[imageIdx]
      : document.body.offsetHeight * -1 * MOVE_PERCENTAGE_FROM_BOTTOM[imageIdx]
  }

  return (
    <AnimatePresence>
      {!imagesLoaded && (
        <motion.div
          key="loader"
          className={styles.percentageLoader}
          initial={{ opacity: 1 }}
          animate={imagesLoaded && { opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.percentageTextWrapper}>
            <motion.div
              key="loader"
              initial={{ y: 0, opacity: 1 }}
              animate={imagesLoaded && { y: -20, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.4 }}
              exit={{ y: -30, opacity: 0 }}
            >
              {`${Math.round(loadingPercentage)}%`}
            </motion.div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 3 }}
        transition={{ duration: 3, delay: 3, ease: [0.4, 0.0, 0.2, 1] }}
        key="images-root"
        className={styles.root}
        ref={rootRef}
      >
        {COLUMNS.map((columnImages, columnIndex) => {
          return (
            <motion.div ref={columnRef} key={columnIndex}>
              {columnImages.map((img, imageIndex) => {
                const motionProps: MotionProps = {
                  initial: {
                    opacity: 0,
                    y: columnIndex % 2 ? '-100%' : '100%',
                  },
                  animate: {
                    opacity: 1,
                    y: getVerticalMovePx(columnIndex, imageIndex),
                  },
                  transition: {
                    duration: 1,
                    delay: COLUMN_DELAY_MAP[columnIndex][imageIndex] * 0.7,
                    opacity: {
                      duration: 0.3,
                    },
                    y: {
                      duration: 2.5, // Total duration of the animation
                      ease: [0.4, 0.0, 0.2, 1],
                    },
                  },
                  exit: { opacity: 0 },
                }

                if (img === 'content') {
                  return (
                    <motion.div
                      key="content"
                      className={styles.contentDisplay}
                      {...motionProps}
                    >
                      <div
                        style={{
                          transform: 'scale(0.2)',
                          pointerEvents: 'none',
                        }}
                      >
                        {children}
                      </div>
                    </motion.div>
                  )
                }

                return (
                  <motion.div key={`${img}-${imageIndex}`} {...motionProps}>
                    <Image
                      layout="fill"
                      priority
                      src={img}
                      alt={`intro-image-column-${columnIndex}-image-${imageIndex}`}
                      onLoadingComplete={handleImageLoaded}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}

export default IntroLoading
