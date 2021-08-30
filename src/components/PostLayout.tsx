import React from "react";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import ContentWrapper from "@components/ContentWrapper";
import { Heading } from "kaidohussar-ui";
import PostMeta from "@components/PostMeta";
import MetaData from "@components/meta/MetaData";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <MetaData
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <ContentWrapper>
        <article>
          <header>
            <Heading type="h1" size="xxl" weight="semibold">
              {title}
            </Heading>
          </header>

          <PostMeta tags={tags} date={date} />

          <div>{children}</div>
        </article>

        <footer>
          <SocialList />
          <Copyright />
        </footer>
      </ContentWrapper>
    </Layout>
  );
}
