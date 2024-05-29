import React, { useState } from 'react'
import Copyright from './Copyright'
import Date from './Date'
import Layout from './Layout'
import { SocialList } from './SocialList'
import { getAuthor } from '../lib/authors'
import { getTag } from '../lib/tags'
import ContentWrapper from '@components/ContentWrapper'
import { Button, Heading } from 'kaidohussar-ui'
import PostMeta from '@components/PostMeta'
import MetaData from '@components/meta/MetaData'
import styles from '@styles/modules/postLayout.module.scss'
import { useRouter } from 'next/router'
import { useGetReadingBarInfo } from '@src/utils/useGetReadingBarInfo'
import DisplayReadPercentage from '@components/DisplayReadPercentage'
import ContentStorageBanner from '@components/ContentStorageBanner'

type Props = {
  title: string
  date: Date
  slug: string
  tags: string[]
  author: string
  description?: string
  children: React.ReactNode
}
const PostLayout = ({
  title,
  date,
  slug,
  author,
  tags,
  description = '',
  children,
}: Props) => {
  const router = useRouter()
  const keywords = tags.map((it) => getTag(it).name)
  const authorName = getAuthor(author).name
  const [contentRef, setContentRef] = useState<HTMLDivElement | undefined>(
    undefined,
  )

  const { percentage, isHidden } = useGetReadingBarInfo(contentRef)
  return (
    <Layout>
      <MetaData
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />

      <DisplayReadPercentage percentage={percentage} isHidden={isHidden} />

      <ContentWrapper ref={setContentRef}>
        <Button
          onClick={() => router.push('/posts', undefined, { shallow: true })}
          className={styles.backLink}
          appearance="text"
        >
          Back to posts
        </Button>
        <article>
          <header className={styles.header}>
            <Heading type="h1" size="xxl" weight="semibold" lineHeight="xs">
              {title}
            </Heading>

            <PostMeta tags={tags} date={date} />
          </header>

          <main className={styles.content}>{children}</main>
        </article>

        <footer className={styles.footer}>
          <SocialList />
          <Copyright />
        </footer>
      </ContentWrapper>
      <ContentStorageBanner />
    </Layout>
  )
}

export default PostLayout
