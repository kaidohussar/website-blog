import React from "react";
import config from "../lib/config";
import { Icon } from "kaidohussar-ui";

export function SocialList({}) {
  return (
    <div>
      <Icon
        type="github"
        size="xxl"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
      />
    </div>
  );
}
