import { Text, Box, Avatar, VStack, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CurrentUserContext } from '../../pages/Pages';

function MessageRow({ message }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <HStack p="5">
      <VStack>
        <Avatar
          name={currentUser.username}
          src={currentUser.avatar}
          size="md"
        />
        <Text fontSize="xs">{currentUser.username}</Text>
      </VStack>
      <Box bg="#B6E2D3" borderRadius="lg" padding="2">
        <Text fontSize="sm">{message.text}</Text>
      </Box>
    </HStack>
  );
}

export default MessageRow;
