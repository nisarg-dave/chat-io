import React from 'react';
import LoginPage from './LoginPage';
import { Flex } from '@chakra-ui/react';

function Pages() {
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <LoginPage />
    </Flex>
  );
}

export default Pages;
