import { Box, Button, Flex, Link, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack, useClipboard, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import PopoverLink from '../PopoverLink';
import { email } from './../../../../data/contactDetails';

const EmailPopoever = ({ confirmCopy }) => {

    const { hasCopied, onCopy } = useClipboard(email);
    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    const handleCopy = () => {
        confirmCopy('Email');
        onCopy();
    };

    return (
        <Flex wrap='wrap'>
            <Box mr={3}>
                Email:
            </Box>
            <Popover trigger='hover' placement='bottom'>
                <PopoverTrigger>
                    <Box width='min'>
                        <PopoverLink text={email} />
                    </Box>
                </PopoverTrigger>
                <PopoverContent rounded='2xl' width='min' bg={bg}>
                    <PopoverArrow bg={bg} />
                    <PopoverBody as={Stack} direction='column' px={2}>
                        <Button
                            size='sm'
                            variant='solid'
                            aria-label='Copy email to clipboard'
                            onClick={handleCopy}
                            leftIcon={hasCopied ? <FaClipboardCheck /> : <FaClipboard />}>Copy</Button>
                        <Button as={Link}
                            size='sm'
                            href={'mailto:' + email}
                            variant='solid'
                            aria-label='Contact via internal app'
                            leftIcon={<IoIosMail />}>Contact</Button>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
};

export default EmailPopoever;