import { extendTheme } from "@chakra-ui/react";

import colors from "./colors"; //color overrides
import styles from "./styles"; //global styles overrides
import breakpoints from "./breakpoints"; //breakpoints overried

import Button from "./components/Button";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Badge from "./components/Badge";

const config = {
  cssVarPrefix: "sp",
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  body: "'Montserrat', sans-serif",
  heading: "'Montserrat', sans-serif",
};

const overrides = extendTheme({
  components: {
    Badge,
    Button,
    Input,
    Textarea,
  },
  config,
  styles,
  colors,
  fonts,
  breakpoints,
});

export default overrides;
