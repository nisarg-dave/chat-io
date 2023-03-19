import { Box, Button, Container, Textarea } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Default from '../layouts/Default';

function ChatPage() {
  return (
    <>
      <Navbar />
      <Default>
        <Container as="section" maxWidth="4xl">
          <Box borderRadius="lg" border="1px" h="550" marginBottom={5}></Box>
          <Textarea
            resize="horizontal"
            placeholder="Type your message here"
            marginBottom={2}
          />
          <Button bg="#EF7C8E" color="white">
            Send
          </Button>
        </Container>
      </Default>
    </>
  );
}

export default ChatPage;
