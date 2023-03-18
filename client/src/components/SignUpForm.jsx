import React, { useContext } from 'react';
import FormField from './FormField';
import { Box, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/Pages';

function SignUpForm() {
  const navigate = useNavigate();

  const { username, password } = useContext(AuthContext);

  const handleSubmit = () => {
    username.current = username.current.value;
    password.current = password.current.value;
    sessionStorage.setItem('auth', {
      username: username.current,
      password: password.current,
    });
    navigate(0);
  };
  return (
    <Box p={4} maxW="sm" borderRadius="lg" border="1px" padding={8}>
      <Heading as="h1" size="2xl" mb={2} textAlign="center">
        Chat IO
      </Heading>
      {/* <FormField placeholder="Email" /> */}
      <FormField placeholder="Username" type="text" ref={username} />
      <FormField placeholder="Password" type="password" ref={password} />
      <Button colorScheme="blue" w="100%" onClick={handleSubmit}>
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpForm;
