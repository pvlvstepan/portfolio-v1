import { Container } from '@chakra-ui/react';

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
      <h1>Hello World!</h1>
    </Container>

  );
}

export default App;
