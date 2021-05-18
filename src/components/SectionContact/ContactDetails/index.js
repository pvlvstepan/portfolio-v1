import { SimpleGrid } from '@chakra-ui/layout';
import React, { useRef } from 'react';
import EmailPopover from './EmailPopover';
import { useToast } from '@chakra-ui/toast';

const ContactDetails = () => {

    const toast = useToast();
    const toastIdRef = useRef();

    const confirmCopy = (text) => {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current);
        }
        toastIdRef.current = toast({
            title: text + ` copied to clipboard!`,
            status: 'success',
            isClosable: true,
            duration: 2000
        });
    };

    return (
        <SimpleGrid
            columns={{ xs: 1, sm: 2 }}
            rows={{ xs: 2, sm: 1 }}
            maxW={{ xs: 'full', lg: '650', xl: '670' }}
            gridGap={6} mb='40px' fontSize='18px' fontWeight='semibold'>
            <EmailPopover confirmCopy={confirmCopy} />
        </SimpleGrid>
    );
};

export default ContactDetails;
