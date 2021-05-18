import { Box } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const SectionContact = () => {
    return (
        <Box as='section' className='section' id='contact'>
            <SectionTitle text='Contact' />
            <SectionDescription text="Have a matter to discuss? Feel free to get in touch!" />
            <ContactDetails />
            <ContactForm />
        </Box>
    );
};

export default SectionContact;