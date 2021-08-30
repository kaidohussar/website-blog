import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import config from "@src/lib/config";
import { countPosts, listPostContent, PostContent } from "@src/lib/posts";
import { listTags, TagContent } from "@src/lib/tags";
import MetaData from "@components/meta/MetaData";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
const Page = ({ posts, tags, pagination, page }: Props) => {
  const url = `/posts/page/${page}`;
  const title = "All posts";
  return (
    <Layout>
      <MetaData url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
