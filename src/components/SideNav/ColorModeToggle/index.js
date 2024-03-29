import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import { useColorMode } from "@chakra-ui/color-mode";
import { Switch } from "@chakra-ui/switch";
import React from "react";
import { Stack } from "@chakra-ui/layout";
import { staggerNav } from "../../../animations";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

const ColorModeToggle = ({ setNavIsOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      as={motion.div}
      variants={staggerNav.item}
      direction="row"
      spacing={3}
      onClick={() => setNavIsOpen(false)}
    >
      <Switch
        aria-label="Toggle Color Mode"
        title={"Switch to " + useColorModeValue("Dark Mode", "Light Mode")}
        id="colorMode"
        onChange={toggleColorMode}
        size="lg"
        isChecked={colorMode === "light" ? true : false}
        className={colorMode === "light" ? "checked" : ""}
      />
      {colorMode === "light" ? (
        <IoSunny fontSize="28px" />
      ) : (
        <IoSunnyOutline fontSize="28px" />
      )}
    </Stack>
  );
};

export default ColorModeToggle;
