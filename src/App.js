import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionHome from './components/SectionHome';
import SectionProjects from './components/SectionProjects';
import SideNav from './components/SideNav';
import { SectionTitle, SectionDescription, SectionParagraph } from './components/TextElements';

function App() {

  const bg = useColorModeValue('light.bg', 'dark.bg');

  return (
    <Container
      maxW={{
        xs: 'full',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px'
      }}>
      <Box maxW={{ xs: 'full', lg: '700', xl: '880px' }} bg={bg} p={{ xs: 3, md: 0 }}>
        <SideNav />
        <SectionHome />
        <SectionProjects />
        <SectionAbout />
        <SectionContact />
      </Box>
    </Container>
  );
}

export default App;
