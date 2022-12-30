import TagButton from '@components/TagButton'
import { getTag } from '@src/lib/tags'
import Date from '@components/Date'
import React from 'react'
import styles from '@styles/modules/postMeta.module.scss'

type Props = {
  tags: string[]
  date: Date
}

const PostMeta = ({ tags, date }: Props) => (
  <div className={styles.container}>
    <ul>
      {tags.map((it, i) => (
        <li key={i}>
          <TagButton tag={getTag(it)} />
        </li>
      ))}
    </ul>
    <span className={styles.separator} />
    <Date date={date} />
  </div>
)

export default PostMeta
