import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "@components/SocialList";
import { Box, Heading } from "kaidohussar-ui";

const Index = () => (
  <Layout>
    <BasicMeta url={"/"} />
    <OpenGraphMeta url={"/"} />

    <Box
      alignItems="center"
      justifyContent="center"
      cssProps={{ height: "70%" }}
    >
      <Box flexDirection="column" justifyContent="center">
        <Heading type="h1" size="xxxl">
          Kaido Hussar
        </Heading>
        <Heading type="h2" size="xl">
          Front-end developer and UX designer
        </Heading>

        <SocialList />
      </Box>
    </Box>
  </Layout>
);

export default Index;
