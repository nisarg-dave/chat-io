import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import pb from '../../lib/pocketbase';

function MessagesBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      // Get 50 messages per page starting at page 1
      const res = await pb.collection('messages').getList(1, 50, {
        sort: 'created',
        expand: 'user',
      });
      setMessages(res.items);
    };
    fetchMessages();
  });

  return (
    <Box
      borderRadius="lg"
      border="1px"
      h="550"
      marginBottom={5}
      bg="#D8A7B1"
    ></Box>
  );
}

export default MessagesBox;
