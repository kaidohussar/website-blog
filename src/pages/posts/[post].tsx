import { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import { fetchPostContent } from "@src/lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "@components/PostLayout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { components } from "@src/utils/components";

export type PostProps = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: any;
};

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

const Post = ({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
}: PostProps) => {
  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
    >
      <MDXRemote components={components} {...source} />
    </PostLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");

  const { data, content } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const mdxSource = await serialize(content);

  const { date, ...dataProps } = data;
  return {
    props: {
      dateString: date,
      description: "",
      source: mdxSource,
      ...dataProps,
    },
  };
};

export default Post;
