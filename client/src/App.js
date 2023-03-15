import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Pages from './pages/Pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pages />
    </ChakraProvider>
  );
}

export default App;
