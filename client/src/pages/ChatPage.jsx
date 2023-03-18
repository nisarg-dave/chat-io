import { Box, Button, Textarea } from '@chakra-ui/react';
import React from 'react';

function ChatPage() {
  return (
    <Box w="50%">
      <Box borderRadius="lg" border="1px" h="550" marginBottom={5}></Box>
      <Textarea
        resize="horizontal"
        placeholder="Type your message here"
        marginBottom={2}
      />
      <Button>Send</Button>
    </Box>
  );
}

export default ChatPage;
