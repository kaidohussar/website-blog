import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";
import dynamic from "next/dynamic";

const Button = dynamic(
  () => import("kaidohussar-ui").then((mod) => mod.Button),
  { ssr: false }
);

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />

      <div className="container">
        <div>
          <h1>
            Kaido Hussar<span className="fancy">.</span>
          </h1>
          <span className="handle">@kaidohussar</span>
          <h2>Front-end developer and UX designer</h2>
          <Button appearance="primary" onClick={() => console.log("click")}>
            Test
          </Button>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
