import Link from 'next/link'
import { TagContent } from '../lib/tags'

type Props = {
  tag: TagContent
}
const TagButton = ({ tag }: Props) => {
  return (
    <Link href={'/posts/tags/[[...slug]]'} as={`/posts/tags/${tag.slug}`}>
      <span>#{tag.name}</span>
    </Link>
  )
}

export default TagButton
