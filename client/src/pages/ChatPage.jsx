import { Button, Container } from '@chakra-ui/react';
import React from 'react';
import MessagesContainer from '../components/MessagesContainer';
import Navbar from '../components/Navbar';
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
          <MessagesContainer />
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
