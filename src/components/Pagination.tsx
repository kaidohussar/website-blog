import { generatePagination } from '../lib/pagination'
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
    <ul>
      {pagination.map((it, i) => (
        <li key={i}>
          {it.excerpt ? (
            '...'
          ) : (
            <Link
              className={it.page === current ? 'active' : null}
              href={link.href(it.page)}
              as={link.as(it.page)}
            >
              {it.page}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
