import { Flex, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useEffect } from "react";
import NavLink from "./NavLink";
import ColorModeToggle from "./ColorModeToggle";
import { github, instagram, linkedIn } from "./../../data/contactDetails";
import NavOverlay from "./NavOverlay";
import { motion, useAnimation } from "framer-motion";
import { staggerNav } from "../../animations";

const SideNav = ({ navIsOpen, setNavIsOpen }) => {
  const bg = useColorModeValue("light.bgLighter", "dark.bgLighter");

  useEffect(() => {
    if (navIsOpen === true) {
      document.getElementsByTagName("html")[0].classList.add("no-scroll");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("no-scroll");
    }
  }, [navIsOpen]);

  const animateOnLoad = useAnimation();

  useEffect(() => {
    animateOnLoad.start("visible");
  }, [animateOnLoad]);

  return (
    <>
      <NavOverlay
        setNavIsOpen={setNavIsOpen}
        visibility={navIsOpen ? "visible" : "hidden"}
      />
      <Flex
        as={motion.aside}
        variants={staggerNav.container}
        initial="hidden"
        animate={animateOnLoad}
        position="fixed"
        right={{ xs: navIsOpen ? 0 : "-100%", lg: "0" }}
        top={0}
        left="auto"
        h={{ xs: "100%", lg: "100vh" }}
        zIndex="sticky"
        maxW={{
          xs: "calc(260px + env(safe-area-inset-left))",
          lg: "40%",
        }}
        width="100%"
        overflowY="auto"
        overflowX="hidden"
        bg={{ xs: bg, lg: "none" }}
        p={{
          xs: "80px 60px 80px 30px",
          lg: "60px 80px 60px 180px",
          xl: "60px 100px 60px 250px",
          xxl: "85px 100px 85px 180px",
        }}
        direction="column"
        alignItems="left"
        justifyContent="space-between"
        transition="right .25s ease-in-out"
      >
        <NavLink
          setNavIsOpen={setNavIsOpen}
          text="Stepan Pavlov"
          to="home"
          type="title"
        />
        <VStack as="nav" spacing={3} align="left" my={12}>
          <NavLink
            setNavIsOpen={setNavIsOpen}
            text="Projects"
            to="projects"
            type="menuLink"
          />
          <NavLink
            setNavIsOpen={setNavIsOpen}
            text="About"
            to="about"
            type="menuLink"
          />
          <NavLink
            setNavIsOpen={setNavIsOpen}
            text="Contact"
            to="contact"
            type="menuLink"
          />
        </VStack>
        <VStack spacing={12} align="left">
          <HStack as="nav" spacing={6}>
            <NavLink
              title="Instagram"
              setNavIsOpen={setNavIsOpen}
              text={<AiOutlineInstagram />}
              to={instagram}
              type="socialLink"
            />
            <NavLink
              title="GitHub"
              setNavIsOpen={setNavIsOpen}
              text={<AiFillGithub />}
              to={github}
              type="socialLink"
            />
            <NavLink
              title="LinkedIn"
              setNavIsOpen={setNavIsOpen}
              text={<FaLinkedinIn />}
              to={linkedIn}
              type="socialLink"
            />
          </HStack>
          <ColorModeToggle setNavIsOpen={setNavIsOpen} />
        </VStack>
      </Flex>
    </>
  );
};

export default SideNav;
