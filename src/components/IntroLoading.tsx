import React, { useEffect, useState } from 'react'
import styles from '@styles/modules/introLoading.module.scss'
import Image from 'next/image'

type Props = {
  children: React.ReactElement
  isLoadingPage: boolean
}

const IMG_TOTAL_COUNT = 14

const IntroLoading = ({ children, isLoadingPage }: Props) => {
  const [isShowingIntro, setIsShowingIntro] = useState(true)
  const [loadingPercentage, setLoadingPercentage] = useState(
    100 / IMG_TOTAL_COUNT,
  )

  useEffect(() => {}, [isLoadingPage])

  const handleImageLoaded = () => {
    setLoadingPercentage((prevState) => prevState + 100 / IMG_TOTAL_COUNT)
  }

  console.log('loadingPercentage', loadingPercentage)
  if (isShowingIntro || isLoadingPage) {
    return (
      <>
        {loadingPercentage !== 100 && (
          <div className={styles.percentageLoader}>
            {`${Math.ceil(loadingPercentage)}%`}
          </div>
        )}
        <div className={styles.root}>
          <div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/boat.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/boat.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/stairs.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/vase.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/vase2.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div className={styles.contentDisplay}>
              <div style={{ transform: 'scale(0.3)', pointerEvents: 'none' }}>
                {children}
              </div>
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image3.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image3.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image3.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image-2.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
            <div>
              <Image
                layout="fill"
                src="/intro-images/image3.webp"
                alt="intro-image-1"
                onLoadingComplete={handleImageLoaded}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  if (!isShowingIntro) {
    return children
  }
}

export default IntroLoading
