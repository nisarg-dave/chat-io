import { Button, Container } from '@chakra-ui/react';
import React from 'react';
import MessagesBox from '../components/MessagesBox';
import Navbar from '../components/navigation/Navbar';
import TextBox from '../components/TextBox';
import Default from '../layouts/Default';

function ChatPage() {
  const handleSend = () => {
    console.log('Sent');
  };
  return (
    <>
      <Navbar />
      <Default>
        <Container as="section" maxWidth="4xl">
          <MessagesBox />
          <TextBox />
          <Button bg="#EF7C8E" color="white" onClick={handleSend}>
            Send
          </Button>
        </Container>
      </Default>
    </>
  );
}

export default ChatPage;
