import { Heading, Text } from 'kaidohussar-ui'
import ExternalLink from '@components/ExternalLink'
import CodeHighlighter from '@components/CodeHighlighter'

export const components = {
  h1: ({ children }) => (
    <Heading type="h1" size="xxl">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading type="h2" size="xl">
      {children}
    </Heading>
  ),
  h3: ({ children, ...rest }) => (
    <Heading type="h3" size="lg" {...rest}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading type="h4" size="md">
      {children}
    </Heading>
  ),
  em: ({ children }) => (
    <Text type="p" size="lg">
      {children}
    </Text>
  ),
  p: ({ children }) => (
    <Text type="p" size="md">
      {children}
    </Text>
  ),
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
