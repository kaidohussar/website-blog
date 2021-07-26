import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";

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
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
