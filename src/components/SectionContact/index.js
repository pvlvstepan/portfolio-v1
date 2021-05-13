import { Box } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';

const SectionContact = () => {
    return (
        <Box as='section' className='section'>
            <SectionTitle text='Contact' />
            <SectionDescription text="Have a matter to discuss? Feel free to get in touch!" />
        </Box>
    );
};

export default SectionContact;