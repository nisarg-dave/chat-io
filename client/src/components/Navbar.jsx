import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../pages/Pages';

function Navbar() {
  const { username } = useContext(AuthContext);
  return (
    <Flex as="nav" bg="#B6E2D3" pt="3" pb="15" px="5">
      <Heading>Chat IO</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Text>{username.current}</Text>
        <Button bg="#EF7C8E" color="white">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
