import { generatePagination } from '../lib/pagination'
import styles from '@styles/modules/pagination.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  current: number
  pages: number
  link: {
    href: (page: number) => string
    as: (page: number) => string
  }
}

export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages)

  return (
    <ul className={styles.container}>
      {pagination.map((it, i) => (
        <li key={i} className={styles.item}>
          {it.excerpt ? (
            <span className={styles.ellipsis}>...</span>
          ) : (
            <Link
              href={link.as(it.page) || link.href(it.page)}
              className={clsx(styles.link, {
                [styles.active]: it.page === current,
              })}
            >
              {it.page}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
