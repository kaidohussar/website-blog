import styles from "../styles/modules/postItem.module.scss";
import TagButton from "@components/TagButton";
import { getTag } from "@src/lib/tags";
import Date from "@components/Date";
import React from "react";

type Props = {
  tags: string[];
  date: Date;
};

const PostMeta = ({ tags, date }: Props) => (
  <div>
    <ul className={"tag-list"}>
      {tags.map((it, i) => (
        <li key={i}>
          <TagButton tag={getTag(it)} />
        </li>
      ))}
    </ul>
    <span>·</span>
    <Date date={date} />
  </div>
);

export default PostMeta;
