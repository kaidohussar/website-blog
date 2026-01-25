import { Text } from 'kaidohussar-ui'
import ExternalLink from '@components/ExternalLink'
import CodeHighlighter from '@components/CodeHighlighter'

export const components = {
  h1: ({ children }) => <h1 className="heading-xxl">{children}</h1>,
  h2: ({ children }) => <h2 className="heading-xl">{children}</h2>,
  h3: ({ children, ...rest }) => (
    <h3 className="heading-lg" {...rest}>
      {children}
    </h3>
  ),
  h4: ({ children }) => <h4 className="heading-md">{children}</h4>,
  em: ({ children }) => <em>{children}</em>,
  p: ({ children }) => <p>{children}</p>,
  a: ({ children, href }) => (
    <ExternalLink href={href}>{children}</ExternalLink>
  ),
  anchor: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  // eslint-disable-next-line react/display-name
  pre: (props) => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)

    return (
      <CodeHighlighter
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      />
    )
  },
}
