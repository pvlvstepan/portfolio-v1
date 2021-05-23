import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { slideFade } from '../../../animations';
import useAnimateOnView from '../../../hooks/useAnimateOnView';

const ContactForm = () => {

    const [nameRef, nameAnimation] = useAnimateOnView();
    const [emailRef, emailAnimation] = useAnimateOnView();
    const [messageRef, messageAnimation] = useAnimateOnView();
    const [buttonRef, buttonAnimation] = useAnimateOnView();

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
            <VStack spacing={6} align='flex-start'>
                <motion.div
                    style={{ width: '100%' }}
                    ref={nameRef}
                    variants={slideFade}
                    initial='hidden'
                    animate={nameAnimation}>
                    <FormControl isInvalid={errors.name && touched.name}>
                        <FormLabel mb={0} htmlFor="name">Name</FormLabel>
                        <Input
                            rounded='xl'
                            type='name'
                            id='name'
                            onChange={e => setName(e.target.value)} />
                        <FormErrorMessage mt={0}>{errors.name && errors.name}</FormErrorMessage>
                    </FormControl>
                </motion.div>
                <motion.div
                    style={{ width: '100%' }}
                    ref={emailRef}
                    variants={slideFade}
                    initial='hidden'
                    animate={emailAnimation}>
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
                </motion.div>
                <motion.div
                    style={{ width: '100%' }}
                    ref={messageRef}
                    variants={slideFade}
                    initial='hidden'
                    animate={messageAnimation}>
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
                </motion.div>
                <motion.div
                    style={{ width: '100%' }}
                    ref={buttonRef}
                    variants={slideFade}
                    initial='hidden'
                    animate={buttonAnimation}>
                    <Button w='full'>Send Message</Button>
                </motion.div>
            </VStack>
        </form>
    );
};

export default ContactForm;
