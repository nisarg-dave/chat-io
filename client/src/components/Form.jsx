import React, { useContext } from 'react';
import FormField from './FormField';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/Pages';

function Form({ buttonText }) {
  const navigate = useNavigate();

  const { username, password, isAuthenticated } = useContext(AuthContext);

  const handleSubmit = () => {
    username.current = username.current.value;
    password.current = password.current.value;
    sessionStorage.setItem('auth', {
      username: username.current,
    });
    navigate('/chat');
  };
  return (
    <Box
      p={4}
      maxW="sm"
      borderRadius="lg"
      border="1px"
      padding={8}
      bg="#B6E2D3"
    >
      <Heading as="h1" size="2xl" mb={2} textAlign="center">
        Chat IO
      </Heading>
      {/* <FormField placeholder="Email" /> */}
      <FormField placeholder="Username" type="text" ref={username} />
      <FormField placeholder="Password" type="password" ref={password} />
      <Button bg="#EF7C8E" w="100%" onClick={handleSubmit} color="white">
        {buttonText}
      </Button>
      {isAuthenticated ? null : (
        <Text textAlign="center" mt="2" color="white">
          <Link fontSize="sm" href="/signup">
            Not registered yet? Sign Up now.
          </Link>
        </Text>
      )}
    </Box>
  );
}

export default Form;
