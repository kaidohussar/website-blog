import React from "react";
import config from "../lib/config";
import { Box, Icon } from "kaidohussar-ui";

export function SocialList({}) {
  return (
    <Box>
      <Box>
        <Icon
          type="github"
          size="xxl"
          href={`https://github.com/${config.github_account}`}
          target="_blank"
        />
      </Box>

      <Box left="md">
        <Icon
          type="linkedin"
          size="xxl"
          href={`https://www.linkedin.com/in/${config.linkedin_account}`}
          target="_blank"
        />
      </Box>
    </Box>
  );
}
