import { Box, Button, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, useClipboard, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaClipboard, FaClipboardCheck, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import PopoverLink from '../PopoverLink';

const PhonePopover = ({ confirmCopy }) => {

    const { hasCopied, onCopy } = useClipboard('+601169848724');
    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    const handleCopy = () => {
        confirmCopy('Phone');
        onCopy();
    };

    return (
        <Box>
            <p>Phone: </p>
            <Popover trigger='hover' placement='bottom'>
                <PopoverTrigger>
                    <Box width='min'>
                        <PopoverLink text='+60 11-6984 8724' />
                    </Box>
                </PopoverTrigger>
                <PopoverContent rounded='2xl' width='min' bg={bg}>
                    <PopoverArrow bg={bg} />
                    <PopoverBody as={Stack} direction='column' px={2}>
                        <Button
                            size='sm'
                            variant='solid'
                            aria-label='Copy phone to clipboard'
                            onClick={handleCopy}
                            leftIcon={hasCopied ? <FaClipboardCheck /> : <FaClipboard />}>Copy</Button>
                        <Button as={Link}
                            size='sm'
                            variant='solid'
                            href='tel:+601169848724'
                            aria-label='Contact via internal app'
                            leftIcon={<IoCall />}>Call</Button>
                        <Button as={Link}
                            size='sm'
                            isExternal={true}
                            href='https://t.me/glyxs'
                            variant='solid'
                            aria-label='Contact via Telegram'
                            leftIcon={<FaTelegramPlane />}>Telegram</Button>
                        <Button as={Link}
                            size='sm'
                            isExternal={true}
                            href='https://wa.me/601169848724'
                            variant='solid'
                            aria-label='Contact via WhatsApp'
                            leftIcon={<FaWhatsapp />}>WhatsApp</Button>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default PhonePopover;
