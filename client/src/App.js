import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Pages from './pages/Pages';

const theme = extendTheme({
  colors: {
    hotPink: '#EF7C8E',
    cream: '#FAE8E0',
    spearmint: '#B6E2D3',
    rosewater: '#D8A7B1',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pages />
    </ChakraProvider>
  );
}

export default App;
