import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  AnimationDefinition,
  motion,
  MotionProps,
  useAnimate,
  useAnimationControls,
} from 'framer-motion'
import styles from '@styles/modules/introLoading.module.scss'
import Image from 'next/image'
import { Loading } from 'kaidohussar-ui'

type Props = {
  children: React.ReactElement
  onAnimationFinished: () => void
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

const IMG_TOTAL_COUNT =
  COLUMN1_IMAGES.length +
  COLUMN2_IMAGES.length +
  COLUMN3_IMAGES.length +
  COLUMN4_IMAGES.length +
  COLUMN5_IMAGES.length

const COLUMN_DELAY_MAP_1 = [4, 3, 2, 1]
const COLUMN_DELAY_MAP_2 = [0.5, 2, 3.5, 4.6]
const COLUMN_DELAY_MAP_CONTENT = [3, 2, 1.5]

const MOVE_PERCENTAGE_FROM_BOTTOM = [0.75, 0.5, 0.25, 0]
const MOVE_PERCENTAGE_FROM_TOP = [0, 0.25, 0.5, 0.75]
const MOVE_PERCENTAGE_FROM_BOTTOM_CONTENT_COLUMN: [number, number, number] = [
  0.15, 0.4, 0.65,
]

const CONTENT_COLUMN_IDX = 2

/*export default function App() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}

1. Set 3 sec count animation
2. if half of images are loaded -> notify counter hook
3. if animation not half way through -> make animation quicker
4. if animation half way through -> continue animation as it is
5. on 99 percentage check again -> if images loaded go to 100, if not -> wait for images to be loaded
*/

const IntroLoading = ({ children, onAnimationFinished }: Props) => {
  const [imagesWrapperScope, animateImagesWrapperInit] = useAnimate()
  const [contentScope, contentScopeInit] = useAnimate()

  const [movePosPercentContent, setMovePosPercentContent] = useState<
    [number, number, number]
  >(MOVE_PERCENTAGE_FROM_BOTTOM_CONTENT_COLUMN)

  const imageAnimationControls = useAnimationControls()

  const initialLoadingPercentage = 100 / IMG_TOTAL_COUNT
  const [loadingPercentage, setLoadingPercentage] = useState(
    initialLoadingPercentage,
  )

  const handleImageLoaded = () => {
    setLoadingPercentage((prevState) => {
      return prevState + 100 / IMG_TOTAL_COUNT
    })
  }

  const imagesLoaded = Math.round(loadingPercentage) === 100

  const getVerticalMovePx = useCallback(
    (dir: 'top' | 'bot', isContentColumn: boolean, imageIdx) => {
      if (isContentColumn) {
        return document.body.offsetHeight * -1 * movePosPercentContent[imageIdx]
      }

      return dir === 'top'
        ? document.body.offsetHeight * -1 * MOVE_PERCENTAGE_FROM_TOP[imageIdx]
        : document.body.offsetHeight * MOVE_PERCENTAGE_FROM_BOTTOM[imageIdx]
    },
    [movePosPercentContent],
  )

  const getImageAnimation = useCallback(
    (dir: 'top' | 'bot', isContentColumn, imageIdx) => {
      const modifier = 0.7

      let delay =
        dir === 'top'
          ? COLUMN_DELAY_MAP_1[imageIdx] * modifier
          : COLUMN_DELAY_MAP_2[imageIdx] * modifier

      if (isContentColumn) {
        delay = COLUMN_DELAY_MAP_CONTENT[imageIdx] * modifier
      }

      const animation: AnimationDefinition = {
        opacity: 1,
        y: getVerticalMovePx(dir, isContentColumn, imageIdx),
        transition: {
          duration: 1,
          opacity: {
            duration: 0.6,
          },
          y: {
            delay,
            duration: 2.5, // Total duration of the animation
            ease: [0.4, 0.0, 0.2, 1],
          },
        },
      }

      return animation
    },
    [getVerticalMovePx],
  )

  const animateImagesWrapper = useCallback(async () => {
    await animateImagesWrapperInit(
      imagesWrapperScope.current,
      { scale: 5, pointerEvents: 'all' },
      {
        duration: 3,
        delay: 3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    )
  }, [animateImagesWrapperInit, imagesWrapperScope])

  useEffect(() => {
    const handleIntroAnimations = async () => {
      await imageAnimationControls.start(({ dir, isContentColumn, index }) =>
        getImageAnimation(dir, isContentColumn, index),
      )
    }

    if (imagesLoaded) {
      animateImagesWrapper()
      handleIntroAnimations().then(async () => {
        onAnimationFinished()
        contentScopeInit(
          contentScope.current,
          {
            borderColor: 'var(--kh-intro-border-end)',
          },
          { duration: 0.3, ease: 'easeInOut' },
        )
      })
    }
  }, [
    animateImagesWrapper,
    contentScope,
    contentScopeInit,
    getImageAnimation,
    imageAnimationControls,
    imagesLoaded,
    imagesWrapperScope,
    onAnimationFinished,
  ])

  useEffect(() => {
    const screenHeight = imagesWrapperScope.current.offsetHeight
    const imageHeight = contentScope.current.getBoundingClientRect()?.height

    if (screenHeight && imageHeight) {
      const screenHeightReal = screenHeight * 1.2
      const topPercentage =
        ((screenHeightReal - imageHeight) / screenHeightReal) * 50

      setMovePosPercentContent([0.15, topPercentage / 100, 0.65])
    }
  }, [contentScope, imagesWrapperScope])

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
        initial={{ scale: 1.2, pointerEvents: 'none' }}
        key="images-root"
        className={styles.root}
        ref={imagesWrapperScope}
      >
        {COLUMNS.map((columnImages, columnIndex) => {
          const animatingFromBotToTop = columnIndex % 2 === 0

          return (
            <motion.div key={columnIndex}>
              {columnImages.map((img, imageIndex) => {
                const initialAnimState = {
                  opacity: 0,
                  y: animatingFromBotToTop ? '100%' : '-100%',
                }

                if (img === 'content') {
                  return (
                    <motion.div
                      ref={contentScope}
                      key="content"
                      custom={{
                        dir: 'top',
                        isContentColumn: true,
                        index: imageIndex,
                      }}
                      className={styles.contentDisplayIntro}
                      initial={initialAnimState}
                      animate={imageAnimationControls}
                    >
                      <motion.div
                        initial={{
                          scale: 0.2,
                        }}
                      >
                        {children}
                      </motion.div>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={`${img}-${imageIndex}`}
                    initial={initialAnimState}
                    custom={{
                      dir: animatingFromBotToTop ? 'top' : 'bot',
                      isContentColumn: columnIndex === CONTENT_COLUMN_IDX,
                      index: imageIndex,
                    }}
                    animate={imageAnimationControls}
                  >
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

//<div className={styles.contentDisplayDefault}>{children}</div>

export default IntroLoading
