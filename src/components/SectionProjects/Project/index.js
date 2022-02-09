import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import {
    AspectRatio,
    Badge,
    Box,
    Heading,
    Link,
    SimpleGrid,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";
import useAnimateOnView from "../../../hooks/useAnimateOnView";
import { slideFade, staggerChildren } from "../../../animations";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Project = ({ data, simple }) => {
    const accent = useColorModeValue("light.accent", "dark.accent");
    const primary = useColorModeValue("light.primary", "dark.primary");
    const bg = useColorModeValue("light.bgLighter", "dark.bgLighter");

    const [imageRef, imageAnimation] = useAnimateOnView();
    const [titleRef, titleAnimation] = useAnimateOnView();
    const [textRef, textAnimation] = useAnimateOnView();
    const [buttonRef, buttonAnimation] = useAnimateOnView();
    const [ulRef, ulAnimation] = useAnimateOnView();

    return (
        <VStack
            maxW={{ xs: "full", lg: "650", xl: "670" }}
            align="left"
            spacing="20px"
        >
            <AspectRatio
                as={motion.div}
                ref={imageRef}
                variants={slideFade}
                initial="hidden"
                animate={imageAnimation}
                ratio={16 / 9}
            >
                <Image src={data.img} alt={data.title} w="670px" h="377px" />
            </AspectRatio>
            <motion.div
                ref={titleRef}
                variants={slideFade}
                initial="hidden"
                animate={titleAnimation}
            >
                {!simple ? (
                    <Text fontSize="16px" fontWeight="semibold" color={accent}>
                        Featured Project
                    </Text>
                ) : undefined}
                <Heading
                    as="h3"
                    fontSize="22px"
                    fontWeight="semibold"
                    color={primary}
                    whiteSpace="pre-line"
                >
                    {data.title}
                </Heading>
            </motion.div>
            <Box
                as={motion.div}
                ref={textRef}
                variants={slideFade}
                initial="hidden"
                animate={textAnimation}
                rounded="2xl"
                bg={bg}
                p={6}
                boxShadow="md"
            >
                <Text fontSize="16px" align="justify" noOfLines={5}>
                    {data.description}
                </Text>
                <Wrap
                    mt="20px"
                    spacing={3}
                    ref={ulRef}
                    as={motion.div}
                    variants={staggerChildren.container}
                    initial="hidden"
                    animate={ulAnimation}
                >
                    {data.techStack &&
                        data.techStack.map((val, key) => {
                            return (
                                <WrapItem
                                    as={motion.li}
                                    key={key}
                                    variants={staggerChildren.item}
                                >
                                    <Badge>{val}</Badge>
                                </WrapItem>
                            );
                        })}
                </Wrap>
            </Box>
            <SimpleGrid
                as={motion.div}
                ref={buttonRef}
                variants={slideFade}
                initial="hidden"
                animate={buttonAnimation}
                columns={2}
                row={1}
                maxW={{ xs: "full", sm: "300px" }}
                gridGap={6}
            >
                <Button
                    leftIcon={<FiExternalLink fontSize="18px" />}
                    isExternal={true}
                    as={Link}
                    href={data.liveView}
                >
                    Live View
                </Button>
                {data.github ? (
                    <Button
                        leftIcon={<AiFillGithub />}
                        isExternal={true}
                        as={Link}
                        href={data.github}
                        variant="secondary"
                    >
                        GitHub
                    </Button>
                ) : undefined}
            </SimpleGrid>
        </VStack>
    );
};

export default Project;
