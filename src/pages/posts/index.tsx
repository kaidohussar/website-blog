import { GetStaticProps } from 'next'
import Layout from '@components/Layout'
import PostListMain from '@components/PostListMain'
import config from '../../lib/config'
import { countPosts, listPostContent, PostContent } from '@src/lib/posts'
import { listTags, TagContent } from '@src/lib/tags'
import MetaData from '@components/meta/MetaData'

type Props = {
  posts: PostContent[]
  tags: TagContent[]
  pagination: {
    current: number
    pages: number
  }
}
export default function Index({ posts, tags, pagination }: Props) {
  const url = '/posts'
  const title = 'All posts'
  return (
    <Layout>
      <MetaData url={url} title={title} />
      <PostListMain posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page)
  const tags = listTags()
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  }
}
