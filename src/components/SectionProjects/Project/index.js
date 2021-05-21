import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Badge, Box, Heading, Link, SimpleGrid, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import React from 'react';


const Project = ({ data }) => {
    const accent = useColorModeValue('light.accent', 'dark.accent');
    const primary = useColorModeValue('light.primary', 'dark.primary');
    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    return (
        <VStack maxW={{ xs: 'full', lg: '650', xl: '670' }} align='left' spacing='20px'>
            <Image src={data.img} alt={data.title} />
            <Box>
                <Text fontSize='16px' fontWeight='semibold' color={accent}>Featured Project</Text>
                <Heading as='h3' fontSize='22px' fontWeight='semibold' color={primary}>{data.title}</Heading>
            </Box>
            <Box rounded='2xl' bg={bg} p={6}>
                <Text fontSize='16px' align='justify'>
                    {data.description}
                </Text>
                <Wrap mt='20px' spacing={3}>
                    {data.techStack && data.techStack.map((val, key) => {
                        return (
                            <WrapItem key={key} >
                                <Badge>
                                    {val}
                                </Badge>
                            </WrapItem>
                        );
                    })}
                </Wrap>
            </Box>
            <SimpleGrid columns={2} row={1} maxW={{ xs: 'full', sm: '300px' }} gridGap={6}>
                <Button isExternal={true} as={Link} href={data.liveView}>Live View</Button>
                <Button isExternal={true} as={Link} href={data.github} variant='secondary'>GitHub</Button>
            </SimpleGrid>
        </VStack>
    );
};

export default Project;
