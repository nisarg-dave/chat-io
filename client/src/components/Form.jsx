import React from 'react';
import FormField from './FormField';
import { Box, Button } from '@chakra-ui/react';

function Form() {
  return (
    <Box p={4} maxW="sm" bg="tomato">
      <FormField placeholder="Email" />
      <FormField placeholder="Username" />
      <FormField placeholder="Password" />
      <Button colorScheme="blue">Submit</Button>
    </Box>
  );
}

export default Form;
