import { Flex } from '@chakra-ui/react';
import React from 'react';

function Default({ children }) {
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh" bg="#FAE8E0">
      {children}
    </Flex>
  );
}

export default Default;
