import Link from 'next/link'
import { TagContent } from '../lib/tags'

type Props = {
  tag: TagContent
}
const TagButton = ({ tag }: Props) => {
  return (
    <Link href={'/posts/tags/[[...slug]]'} as={`/posts/tags/${tag.slug}`}>
      <a>#{tag.name}</a>
    </Link>
  )
}

export default TagButton
