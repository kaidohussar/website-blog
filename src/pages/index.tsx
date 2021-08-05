import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";
import { Button, useTheme } from "kaidohussar-ui";

export default function Index() {
  const { setTheme, theme } = useTheme();
  console.log("active theme", theme);
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
          <Button appearance="primary" onClick={() => setTheme("light")}>
            Light
          </Button>
          <Button appearance="primary" onClick={() => setTheme("dark")}>
            DArk
          </Button>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
