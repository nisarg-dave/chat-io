import { Textarea } from '@chakra-ui/react';
import React from 'react';

function TextBox({ onChange, value }) {
  return (
    <Textarea
      resize="horizontal"
      placeholder="Type your message here"
      marginBottom={2}
      borderRadius="lg"
      border="1px"
      focusBorderColor="hotPink"
      type="text"
      size="lg"
      onChange={onChange}
      value={value}
    />
  );
}

export default TextBox;
