import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../pages/Pages';
import { useNavigate } from 'react-router-dom';
import pb from '../../lib/pocketbase';

function Navbar() {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Need to unsubscribe from realtime because otherwise we will get memory leaks
    pb.collection('messages').unsubscribe('*');
    pb.authStore.clear();
    navigate('/');
  };
  return (
    <Flex as="nav" bg="spearmint" pt="3" pb="15" px="5">
      <Heading>Chat IO</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name={currentUser.username} src={currentUser.avatar} />
        <Text pt="1">{currentUser.username}</Text>
        <Button bg="hotPink" color="white" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
