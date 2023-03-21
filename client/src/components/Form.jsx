import React, { useContext } from 'react';
import FormField from './FormField';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/Pages';
import pb from '../lib/pocketbase';

function Form({ buttonText, showSignUpMessage }) {
  const navigate = useNavigate();

  const { username, password } = useContext(AuthContext);

  const login = async () => {
    await pb
      .collection('users')
      .authWithPassword(username.current, password.current);
    navigate('/chat');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    username.current = username.current.value;
    password.current = password.current.value;
    if (buttonText === 'Log In') {
      await login();
    } else {
      try {
        await pb.collection('users').create({
          username: username.current,
          password: password.current,
          passwordConfirm: password.current,
          avatar: `https://api.dicebear.com/5.x/bottts/svg?seed=${username.current}`,
        });
        await login();
      } catch (e) {
        console.log(e.data);
        alert(Object.values(e.data));
      }
    }
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
      {showSignUpMessage ? (
        <Text textAlign="center" mt="2">
          <Link fontSize="sm" href="/signup">
            Not registered yet? Sign Up now.
          </Link>
        </Text>
      ) : null}
    </Box>
  );
}

export default Form;
