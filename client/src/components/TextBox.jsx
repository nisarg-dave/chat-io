import { Textarea } from '@chakra-ui/react';
import React from 'react';

function TextBox() {
  return (
    <Textarea
      resize="horizontal"
      placeholder="Type your message here"
      marginBottom={2}
      borderRadius="lg"
      border="1px"
      focusBorderColor="#EF7C8E"
    />
  );
}

export default TextBox;