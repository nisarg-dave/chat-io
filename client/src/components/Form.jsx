import React, { useRef } from 'react';
import FormField from './FormField';
import { Box, Button, Heading } from '@chakra-ui/react';

function Form() {
  const username = useRef('');
  const password = useRef('');

  const handleSubmit = e => {
    e.preventDefault();
    username.current = username.current.value;
    password.current = password.current.value;
    sessionStorage.setItem('auth', {
      username: username.current,
      password: password.current,
    });
  };
  return (
    <Box p={4} maxW="sm" borderRadius="lg" border="1px" padding={8}>
      <Heading as="h1" size="2xl" mb={2} textAlign="center">
        Chat IO
      </Heading>
      {/* <FormField placeholder="Email" /> */}
      <FormField placeholder="Username" type="text" innerRef={username} />
      <FormField placeholder="Password" type="password" innerRef={password} />
      <Button colorScheme="blue" w="100%" onClick={handleSubmit}>
        Sign Up
      </Button>
    </Box>
  );
}

export default Form;
