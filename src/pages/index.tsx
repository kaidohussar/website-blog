import Layout from "@components/Layout";
import { Box, Heading } from "kaidohussar-ui";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import { SocialList } from "@components/SocialList";

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
        <Heading type="h1" size="xxxl" weight="bold">
          Kaido Hussar
        </Heading>
        <Heading type="h2" size="xl">
          Front-end developer
        </Heading>
        <Box top="lg">
          <SocialList />
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Index;
