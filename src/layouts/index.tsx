import React from "react";
import Layout from "../components/Layout";
import Date from "../components/Date";
import styles from "../../public/styles/content.module.css";

type Props = {
  title: string;
  date: string;
};
export default function Index({ title, date }: Props) {
  return ({ children: content }) => {
    return (
      <Layout>
        <div className={"post"}>
          <h1>{title}</h1>
          <Date dateString={date} />
          <div className={styles.content}>{content}</div>
        </div>
        <style jsx>
          {`
            .post {
              max-width: 34rem;
              width: 100%;
              margin: 0 auto;
            }

            h1 {
              margin: 0 0 0.5rem;
              font-size: 2.25rem;
            }
          `}
        </style>
      </Layout>
    );
  };
}