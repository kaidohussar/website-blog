import React from 'react'
import { PostContent } from '../lib/posts'
import PostItem from './PostItem'
import Pagination from './Pagination'
import styles from '@styles/modules/postList.module.scss'

type Props = {
  posts: PostContent[]
  pagination: {
    current: number
    pages: number
  }
}

const PostList = ({ posts, pagination }: Props) => {
  return (
    <div className={styles.list}>
      <ul>
        {posts.map((it, i) => (
          <li className={styles.listItem} key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>

      {pagination.pages > 1 && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
            as: (page) => (page === 1 ? null : '/posts/page/' + page),
          }}
        />
      )}
    </div>
  )
}

export default PostList
