import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import useAnimateOnView from "../../hooks/useAnimateOnView";
import { slideFade } from "../../animations";
import { motion } from "framer-motion";

const Footer = () => {
  const [ref, animation] = useAnimateOnView();

  return (
    <Flex
      as={motion.footer}
      ref={ref}
      variants={slideFade}
      initial={{ opacity: 0 }}
      animate={animation}
      fontSize="18px"
      direction="column"
      maxW={{ xs: "full", lg: "650", xl: "670" }}
      pb={{ xs: "60px", xxl: "85px" }}
      align="center"
    >
      <Text align="center">Designed & built by Stepan Pavlov. 2021</Text>
    </Flex>
  );
};

export default Footer;
