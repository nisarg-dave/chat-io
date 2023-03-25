import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import pb from '../../lib/pocketbase';
import MessageRow from './MessageRow';

function MessagesBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      // Get 50 messages per page starting at page 1
      const res = await pb.collection('messages').getList(1, 50, {
        sort: 'created',
        // Expand option lets you join relationships
        expand: 'user',
      });
      console.log(res.items);
      setMessages(res.items);
    };
    fetchMessages();
  }, []);

  pb.collection('messages').subscribe('*', e => {
    setMessages([...messages, e.record]);
  });

  return (
    <Box borderRadius="lg" border="1px" h="550" marginBottom={5} bg="#D8A7B1">
      {messages.map(message => {
        return <MessageRow message={message} key={message.id} />;
      })}
    </Box>
  );
}

export default MessagesBox;
