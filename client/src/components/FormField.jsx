import React from 'react';
import { Input } from '@chakra-ui/react';

function FormField({ placeholder, innerRef, type }) {
  return <Input placeholder={placeholder} mb={5} type={type} ref={innerRef} />;
}

export default FormField;
