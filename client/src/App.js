import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Pages from './pages/Pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100vw" height="100vh">
        <Pages />
      </Box>
    </ChakraProvider>
  );
}

export default App;
