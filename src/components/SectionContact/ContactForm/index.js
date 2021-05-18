import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    let touched = {
        name: name !== null,
        email: email !== null,
        message: message !== null
    };

    useEffect(() => {
        let errors = {};

        if (!name) {
            errors.name = 'Name cannot be empty';
        }

        if (!email) {
            errors.email = 'Email cannot be empty';
        }

        if (!message) {
            errors.message = 'Message cannot be empty';
        }

        setErrors(errors);
    }, [name, email, message]);

    return (
        <form autoComplete="off">
            <VStack maxW={{ xs: 'full', lg: '650', xl: '670' }} spacing={3}>
                <FormControl isInvalid={errors.name && touched.name}>
                    <FormLabel mb={0} htmlFor="name">Name</FormLabel>
                    <Input
                        rounded='xl'
                        type='name'
                        id='name'
                        onChange={e => setName(e.target.value)} />
                    <FormErrorMessage mt={0}>{errors.name && errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email && touched.email} >
                    <FormLabel mb={0} htmlFor="email">Email</FormLabel>
                    <Input
                        rounded='xl'
                        transition='.25s ease-in-out'
                        type='email'
                        id='email'
                        onChange={e => setEmail(e.target.value)} />
                    <FormErrorMessage mt={0}>{errors.email && errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.message && touched.message} >
                    <FormLabel mb={0} htmlFor="message">Message</FormLabel>
                    <Textarea
                        borderRadius='xl'
                        resize='none'
                        height='150px'
                        transition='.25s ease-in-out'
                        id='message'
                        onChange={e => setMessage(e.target.value)} />
                    <FormErrorMessage mt={-2}>{errors.message && errors.message}</FormErrorMessage>
                </FormControl>
                <Button w='full'>Send Message</Button>
            </VStack>
        </form>
    );
};

export default ContactForm;
