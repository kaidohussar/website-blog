import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import styles from "../styles/modules/postList.module.scss";
import ContentWrapper from "@components/ContentWrapper";
import { Box } from "kaidohussar-ui";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

const PostList = ({ posts, tags, pagination }: Props) => {
  return (
    <ContentWrapper>
      <Box>
        <div className={styles.list}>
          <ul>
            {posts.map((it, i) => (
              <li className={styles.listItem} key={i}>
                <PostItem post={it} />
              </li>
            ))}
          </ul>

          {pagination.pages > 1 && (
            <Pagination
              current={pagination.current}
              pages={pagination.pages}
              link={{
                href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
                as: (page) => (page === 1 ? null : "/posts/page/" + page),
              }}
            />
          )}
        </div>

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

export default PostList;
