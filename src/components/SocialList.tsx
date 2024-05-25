import React from 'react'
import config from '../lib/config'
import { Box, Icon } from 'kaidohussar-ui'

export function SocialList({}) {
  return (
    <Box>
      <Box cssProps={{ borderRadius: 6, overflow: 'hidden' }}>
        <Icon
          type="github"
          size="xxl"
          href={`https://github.com/${config.github_account}`}
          target="_blank"
        />
      </Box>

      <Box left="md" cssProps={{ borderRadius: 6, overflow: 'hidden' }}>
        <Icon
          type="linkedin"
          size="xxl"
          href={`https://www.linkedin.com/in/${config.linkedin_account}`}
          target="_blank"
        />
      </Box>
    </Box>
  )
}
