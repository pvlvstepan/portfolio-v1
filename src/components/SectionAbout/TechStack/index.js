import { List, ListItem, GridItem, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import skills from './../../../data/skills';
import { staggerChildren } from '../../../animations';
import useAnimateOnView from '../../../hooks/useAnimateOnView';
const TechStack = () => {

    const accent = useColorModeValue('light.accent', 'dark.accent');

    const [ulRef, ulAnimation] = useAnimateOnView();

    return (
        <SimpleGrid ref={ulRef} as={motion.div} variants={staggerChildren.container} initial="hidden" animate={ulAnimation} columns={{ xs: 2, md: 4 }} row={1} rowGap={6}>
            {skills && skills.map((val, key) => {
                return (
                    <GridItem as={motion.div} key={key} variants={staggerChildren.item}>
                        <Heading mb={3} fontWeight='semibold' as='h3' color={accent} fontSize='18px'>{val.title}</Heading>
                        <List>
                            {val.skills && val.skills.map((val, key) => {
                                return (
                                    <ListItem key={key}>
                                        {val}
                                    </ListItem>
                                );
                            })}
                        </List>
                    </GridItem>
                );
            })}
        </SimpleGrid>
    );
};

export default TechStack;
