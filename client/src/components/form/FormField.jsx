import React, { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';

const FormField = forwardRef(function FormField({ placeholder, type }, ref) {
  return (
    <Input
      placeholder={placeholder}
      mb={5}
      type={type}
      ref={ref}
      focusBorderColor="#EF7C8E"
    />
  );
});

export default FormField;
