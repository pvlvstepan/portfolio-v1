import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionHome from './components/SectionHome';
import SectionProjects from './components/SectionProjects';
import SideNav from './components/SideNav';
import 'focus-visible/dist/focus-visible';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {

  const loader = document.querySelector(".loader-container");

  const hideLoader = () => loader.classList.add("loader--hide");

  useEffect(() => {
    hideLoader();
  }, []);

  const bg = useColorModeValue('light.bg', 'dark.bg');

  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <Container
      maxW={{
        xs: 'full',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px'
      }}>
      <Box maxW={{ xs: 'full', lg: '700', xl: '880px' }} bg={bg}>
        <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <SideNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <SectionHome />
        <SectionProjects />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
