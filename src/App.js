import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <Container
      maxW={{
        xs: 'full',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px'
      }}>
      <Header />
      <Box h='100vh'></Box>
      <Box h='100vh'></Box>
    </Container>
  );
}

export default App;
