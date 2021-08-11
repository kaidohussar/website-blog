import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "@components/SocialList";
import { Heading } from "kaidohussar-ui";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />

      <div>
        <Heading type="h1" size="xxxl">
          Kaido Hussar
        </Heading>
        <Heading type="h1" size="xl">
          Front-end developer and UX designer
        </Heading>

        <SocialList />
      </div>
    </Layout>
  );
}
