import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import useAnimateOnView from '../../hooks/useAnimateOnView';
import { slideFade } from '../../animations';
import { motion } from 'framer-motion';

const SectionContact = () => {

    const [textRef, textAnimation] = useAnimateOnView();

    return (
        <Box as='section' className='section' id='contact' maxW={{ xs: 'full', lg: '650', xl: '670' }}>
            <SectionTitle text='Contact' />
            <SectionDescription text="Have a matter to discuss? Feel free to get in touch!" />
            <ContactDetails />
            <motion.div
                ref={textRef}
                variants={slideFade}
                initial='hidden'
                animate={textAnimation}>
                <Text mb='10px' fontSize='18px' fontWeight='semibold'>Or, better yet, let me get back to you.</Text>
            </motion.div>
            <ContactForm />
        </Box>
    );
};

export default SectionContact;