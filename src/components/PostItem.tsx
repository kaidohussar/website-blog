import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import { Heading } from "kaidohussar-ui";
import styles from "../styles/modules/postItem.module.scss";

type Props = {
  post: PostContent;
};

const PostItem = ({ post }: Props) => (
  <Link href={"/posts/" + post.slug}>
    <a className={styles.postItem}>
      <Date date={parseISO(post.date)} />
      <Heading size="xxl" type="h2" weight="semibold">
        {post.title}
      </Heading>
    </a>
  </Link>
);

export default PostItem;
