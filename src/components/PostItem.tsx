import { PostContent } from '../lib/posts'
import Date from './Date'
import Link from 'next/link'
import { parseISO } from 'date-fns'
import { Heading } from 'kaidohussar-ui'
import styles from '../styles/modules/postItem.module.scss'

type Props = {
  post: PostContent
}

const PostItem = ({ post }: Props) => (
  <Link className={styles.postItem} href={'/posts/' + post.slug}>
    <Date date={parseISO(post.date)} />
    <Heading size="xxl" type="h2" weight="semibold">
      {post.title}
    </Heading>
  </Link>
)

export default PostItem
