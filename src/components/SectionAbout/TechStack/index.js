import { List, ListItem, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import skills from './../../../data/skills';
const TechStack = () => {
    return (
        <SimpleGrid columns={{ xs: 2, md: 4 }} row={1} rowGap={6}>
            {skills && skills.map((val, key) => {
                return (
                    <GridItem key={key}>
                        <Heading mb={3} fontWeight='semibold' as='h3' color='accent' fontSize='18px'>{val.title}</Heading>
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
