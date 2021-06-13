import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { motion } from 'framer-motion';
import { slideFade } from '../../../animations';
import useAnimateOnView from '../../../hooks/useAnimateOnView';
import useForm from '../../../hooks/useForm';
import validateInput from './validateInput';

const ContactForm = () => {

    const [nameRef, nameAnimation] = useAnimateOnView();
    const [emailRef, emailAnimation] = useAnimateOnView();
    const [messageRef, messageAnimation] = useAnimateOnView();
    const [buttonRef, buttonAnimation] = useAnimateOnView();

    const { handleChange, handleSubmit, values, errors, touched } = useForm(validateInput);

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <VStack spacing={6} align='flex-start'>
                <FormControl
                    as={motion.div}
                    ref={nameRef}
                    variants={slideFade}
                    initial='hidden'
                    isInvalid={(errors.name && touched.name) && true}
                    animate={nameAnimation}>
                    <FormLabel mb={0} htmlFor="name">Name</FormLabel>
                    <Input
                        rounded='xl'
                        type='name'
                        name='name'
                        id='name'
                        value={values.name}
                        onChange={handleChange} />
                    <FormErrorMessage mt={0}>{errors.name && errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                    as={motion.div}
                    ref={emailRef}
                    variants={slideFade}
                    isInvalid={(errors.email && touched.email) && true}
                    initial='hidden'
                    animate={emailAnimation}>
                    <FormLabel mb={0} htmlFor="email">Email</FormLabel>
                    <Input
                        rounded='xl'
                        transition='.25s ease-in-out'
                        type='email'
                        name='email'
                        id='email'
                        value={values.email}
                        onChange={handleChange} />
                    <FormErrorMessage mt={0}>{errors.email && errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                    as={motion.div}
                    ref={messageRef}
                    variants={slideFade}
                    initial='hidden'
                    isInvalid={(errors.message && touched.message) && true}
                    animate={messageAnimation}>
                    <FormLabel mb={0} htmlFor="message">Message</FormLabel>
                    <Textarea
                        borderRadius='xl'
                        resize='none'
                        height='150px'
                        transition='.25s ease-in-out'
                        name='message'
                        id='message'
                        value={values.message}
                        onChange={handleChange} />
                    <FormErrorMessage mt={-2}>{errors.message && errors.message}</FormErrorMessage>
                </FormControl>
                <motion.div
                    style={{ width: '100%' }}
                    ref={buttonRef}
                    variants={slideFade}
                    initial='hidden'
                    animate={buttonAnimation}>
                    <Button type='submit' w='full' isDisabled={((errors.message && touched.message) || (errors.email && touched.email) || (errors.name && touched.name)) && true}>Send Message</Button>
                </motion.div>
            </VStack>
        </form>
    );
};

export default ContactForm;
