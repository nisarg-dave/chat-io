import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../pages/Pages';
import { useNavigate } from 'react-router-dom';
import pb from '../lib/pocketbase';

function Navbar() {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    pb.authStore.clear();
    navigate('/');
  };
  return (
    <Flex as="nav" bg="#B6E2D3" pt="3" pb="15" px="5">
      <Heading>Chat IO</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Text>{currentUser.username}</Text>
        <Button bg="#EF7C8E" color="white" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
