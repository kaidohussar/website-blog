import Layout from '../components/Layout'
import { Box, Text } from 'kaidohussar-ui'

const Index = () => (
  <Layout>
    <Box
      alignItems="center"
      justifyContent="center"
      cssProps={{ height: '70%' }}
    >
      <Box flexDirection="column" justifyContent="center">
        <Text type="span" size="xl">
          404 | Page not found
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default Index
