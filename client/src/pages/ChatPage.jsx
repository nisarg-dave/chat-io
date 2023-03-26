import { Button, Container } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import MessagesBox from '../components/messages/MessagesBox';
import Navbar from '../components/navigation/Navbar';
import TextBox from '../components/messages/TextBox';
import Default from '../layouts/Default';
import { CurrentUserContext } from './Pages';
import pb from '../lib/pocketbase';

function ChatPage() {
  const [newMessage, setNewMessage] = useState('');
  const { currentUser } = useContext(CurrentUserContext);

  const handleSend = async () => {
    await pb
      .collection('messages')
      .create({ text: newMessage, user: currentUser.id });
    setNewMessage('');
  };

  return (
    <>
      <Navbar />
      <Default>
        <Container as="section" maxWidth="4xl">
          <MessagesBox />
          <TextBox
            onChange={e => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <Button bg="hotPink" color="white" onClick={handleSend}>
            Send
          </Button>
        </Container>
      </Default>
    </>
  );
}

export default ChatPage;
