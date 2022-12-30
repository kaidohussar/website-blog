import Date from '@components/Date'
import React from 'react'
import BasicMeta from '@components/meta/BasicMeta'
import OpenGraphMeta from '@components/meta/OpenGraphMeta'
import JsonLdMeta from '@components/meta/JsonLdMeta'

type Props = {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  date?: Date
  url: string
}

const MetaData = ({
  title,
  description,
  keywords,
  author,
  url,
  date,
}: Props) => (
  <>
    <BasicMeta
      url={url}
      title={title}
      keywords={keywords}
      description={description}
    />
    <OpenGraphMeta url={url} title={title} description={description} />
    <JsonLdMeta
      url={url}
      title={title}
      keywords={keywords}
      date={date}
      author={author}
      description={description}
    />
  </>
)

export default MetaData
