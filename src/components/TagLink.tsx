import Link from 'next/link'
import { TagContent } from '../lib/tags'
import styles from '@styles/modules/tag.module.scss'

type Props = {
  tag: TagContent
}
export default function Tag({ tag }: Props) {
  return (
    <Link
      className={styles.link}
      href={'/posts/tags/[[...slug]]'}
      as={`/posts/tags/${tag.slug}`}
    >
      <a>{'#' + tag.name}</a>
    </Link>
  )
}
