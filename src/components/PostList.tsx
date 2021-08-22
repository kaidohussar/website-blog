import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
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
    <Box justifyContent="center">
      <Box top="xxl" flexDirection="column" maxWidth="medium">
        <div className={"posts"}>
          <ul className={"post-list"}>
            {posts.map((it, i) => (
              <li key={i}>
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
        <ul className={"categories"}>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default PostList;
