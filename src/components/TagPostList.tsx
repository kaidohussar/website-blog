import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import ContentWrapper from "@components/ContentWrapper";
import styles from "@styles/modules/tagPostList.module.scss";
import { Button } from "kaidohussar-ui";
import { useRouter } from "next/router";
import PostList from "@components/PostList";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
const TagPostList = ({ posts, tag, pagination }: Props) => {
  const router = useRouter();

  return (
    <ContentWrapper size="wide">
      <div className={styles.breadCrumbs}>
        <Button
          onClick={() => router.push("/posts", undefined, { shallow: true })}
          className={styles.backLink}
          appearance="text"
        >
          All posts
        </Button>
        <span>/</span>
        <span>{tag.name}</span>
      </div>
      <PostList posts={posts} pagination={pagination} />
    </ContentWrapper>
  );
};

export default TagPostList;
