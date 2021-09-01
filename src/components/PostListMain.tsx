import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import styles from "../styles/modules/postList.module.scss";
import ContentWrapper from "@components/ContentWrapper";
import { Box } from "kaidohussar-ui";
import PostList from "@components/PostList";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

const PostListMain = ({ posts, tags, pagination }: Props) => {
  return (
    <ContentWrapper>
      <Box>
        <PostList posts={posts} pagination={pagination} />
        <ul className={styles.tags}>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </Box>
    </ContentWrapper>
  );
};

export default PostListMain;
