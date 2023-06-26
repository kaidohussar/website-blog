import Layout from '../components/Layout'
import { Box, Text } from 'kaidohussar-ui'

const Index = () => (
  <Layout>
    <Box
      alignItems="center"
      justifyContent="center"
      cssProps={{ height: '70%' }}
    >
      <Box
        flexDirection="column"
        justifyContent="center"
        cssProps={{ width: '100%', height: '100%' }}
      >
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3FRCH4bCsUXV6abFWUhjAMBSur-OdYnE
            &q=59.029309, 24.764709
            &zoom=19
            &maptype=satellite"
        />
      </Box>
    </Box>
  </Layout>
)

export default Index
