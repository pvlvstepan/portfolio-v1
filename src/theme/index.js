import { extendTheme } from '@chakra-ui/react';

import colors from './colors'; //color overrides
import styles from './styles'; //global styles overrides
import breakpoints from './breakpoints'; //breakpoints overried

import Button from './components/Button';

const config = {
    cssVarPrefix: 'sp',
    initialColorMode: 'dark',
    useSystemColorMode: true
};

const fonts = {
    body: 'Montserrat',
    heading: 'Montserrat'
};

const overrides = extendTheme({
    components: {
        Button
    },
    config,
    styles,
    colors,
    fonts,
    breakpoints
});

export default overrides;