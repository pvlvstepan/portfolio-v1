import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { AspectRatio, Badge, Box, Heading, Link, SimpleGrid, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';
import useAnimateOnView from '../../../hooks/useAnimateOnView';
import { slideFade, staggerChildren } from '../../../animations';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const Project = ({ data }) => {
    const accent = useColorModeValue('light.accent', 'dark.accent');
    const primary = useColorModeValue('light.primary', 'dark.primary');
    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    const [imageRef, imageAnimation] = useAnimateOnView();
    const [titleRef, titleAnimation] = useAnimateOnView();
    const [textRef, textAnimation] = useAnimateOnView();
    const [buttonRef, buttonAnimation] = useAnimateOnView();
    const [ulRef, ulAnimation] = useAnimateOnView();

    return (
        <VStack maxW={{ xs: 'full', lg: '650', xl: '670' }} align='left' spacing='20px'>
            <motion.div
                ref={imageRef}
                variants={slideFade}
                initial='hidden'
                animate={imageAnimation}>
                <AspectRatio ratio={17 / 9}>
                    <Image src={data.img} alt={data.title} w='670px' h='500px' />
                </AspectRatio>
            </motion.div>
            <motion.div
                ref={titleRef}
                variants={slideFade}
                initial='hidden'
                animate={titleAnimation}>
                <Text fontSize='16px' fontWeight='semibold' color={accent}>Featured Project</Text>
                <Heading as='h3' fontSize='22px' fontWeight='semibold' color={primary}>{data.title}</Heading>
            </motion.div>
            <motion.div
                ref={textRef}
                variants={slideFade}
                initial='hidden'
                animate={textAnimation}>
                <Box rounded='2xl' bg={bg} p={6} boxShadow='md'>
                    <Text fontSize='16px' align='justify'>
                        {data.description}
                    </Text>
                    <Wrap mt='20px' spacing={3} ref={ulRef} as={motion.ul} variants={staggerChildren.container} initial="hidden" animate={ulAnimation}>
                        {data.techStack && data.techStack.map((val, key) => {
                            return (
                                <WrapItem as={motion.li} key={key} variants={staggerChildren.item} >
                                    <Badge>
                                        {val}
                                    </Badge>
                                </WrapItem>
                            );
                        })}
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                ref={buttonRef}
                variants={slideFade}
                initial='hidden'
                animate={buttonAnimation}>
                <SimpleGrid columns={2} row={1} maxW={{ xs: 'full', sm: '300px' }} gridGap={6}>
                    <Button leftIcon={<FiExternalLink fontSize='18px' />} isExternal={true} as={Link} href={data.liveView}>Live View</Button>
                    <Button leftIcon={<AiFillGithub />} isExternal={true} as={Link} href={data.github} variant='secondary'>GitHub</Button>
                </SimpleGrid>
            </motion.div>
        </VStack>
    );
};

export default Project;
