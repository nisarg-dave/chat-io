import { Text, Box, Avatar, VStack, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CurrentUserContext } from '../../pages/Pages';

function MessageRow({ message }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isCurrentUser = currentUser.id === message.expand.user.id;
  return (
    <>
      {isCurrentUser ? (
        <HStack p="5" justify="end">
          <Box bg="spearmint" borderRadius="lg" padding="2">
            <Text fontSize="sm">{message.text}</Text>
          </Box>
          <VStack>
            <Avatar
              name={currentUser.username}
              src={currentUser.avatar}
              size="md"
            />
            <Text fontSize="xs">{currentUser.username}</Text>
          </VStack>
        </HStack>
      ) : (
        <HStack p="5" justify="start">
          <VStack>
            <Avatar
              name={message.expand.user.username}
              src={message.expand.user.avatar}
              size="md"
            />
            <Text fontSize="xs">{message.expand.user.username}</Text>
          </VStack>
          <Box bg="spearmint" borderRadius="lg" padding="2">
            <Text fontSize="sm">{message.text}</Text>
          </Box>
        </HStack>
      )}
    </>
  );
}

export default MessageRow;
