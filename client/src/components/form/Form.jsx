import React, { useRef } from 'react';
import FormField from './FormField';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import pb from '../../lib/pocketbase';

function Form({ buttonText, showSignUpMessage }) {
  const navigate = useNavigate();

  const username = useRef('');
  const password = useRef('');

  const login = async () => {
    try {
      await pb
        .collection('users')
        .authWithPassword(username.current.value, password.current.value);
      navigate('/chat');
    } catch (e) {
      const errorMessageObject = e.data.data;
      if (errorMessageObject.identity && errorMessageObject.password) {
        alert(
          `Username: ${errorMessageObject.identity.message} \nPassword: ${errorMessageObject.password.message}`
        );
      }
      if (errorMessageObject.identity && !errorMessageObject.password) {
        alert(`Username: ${errorMessageObject.identity.message}`);
      }
      if (!errorMessageObject.identity && errorMessageObject.password) {
        alert(`Password: ${errorMessageObject.password.message}`);
      }
      if (!errorMessageObject.identity && !errorMessageObject.password) {
        alert(`${e.data.message}`);
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (buttonText === 'Log In') {
      await login();
    } else {
      try {
        await pb.collection('users').create({
          username: username.current.value,
          password: password.current.value,
          passwordConfirm: password.current.value,
          avatar: `https://api.dicebear.com/5.x/bottts/svg?seed=${username.current}`,
        });
        await login();
      } catch (e) {
        const errorMessageObject = e.data.data;
        if (username.current.value === '' && errorMessageObject.password) {
          alert(
            `Username: Cannot be blank.\nPassword: ${errorMessageObject.password.message}`
          );
        }
        if (username.current.value === '' && !errorMessageObject.password) {
          alert('Username: Cannot be blank.');
        }
        if (username.current.value !== '' && errorMessageObject.password) {
          alert(`Password: ${errorMessageObject.password.message}`);
        }
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
      bg="spearmint"
    >
      <Heading as="h1" size="2xl" mb={2} textAlign="center">
        Chat IO
      </Heading>
      {/* <FormField placeholder="Email" /> */}
      <FormField placeholder="Username" type="text" ref={username} />
      <FormField placeholder="Password" type="password" ref={password} />
      <Button bg="hotPink" w="100%" onClick={handleSubmit} color="white">
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
