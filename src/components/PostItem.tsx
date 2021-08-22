import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};

const PostItem = ({ post }: Props) => {
  console.log("post", post);

  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
      </a>
    </Link>
  );
};

export default PostItem;
