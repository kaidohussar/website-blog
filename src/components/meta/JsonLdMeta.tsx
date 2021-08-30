import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../lib/config";
import { formatISO } from "date-fns";
import Head from "next/head";

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  image?: string;
  description?: string;
};
const JsonLdMeta = ({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}: Props) => {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords && keywords.join(","),
          datePublished: date && formatISO(date),
          author: author && author,
          image: image && image,
          description: description && description,
        })}
      />
    </Head>
  );
};

export default JsonLdMeta;
