import React, { useEffect, useState } from 'react';
import SignUpPage from './SignUpPage';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './ChatPage';

function Pages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <Router>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<ChatPage />} />
          </Routes>
        ) : (
          <SignUpPage></SignUpPage>
        )}
      </Router>
    </Flex>
  );
}

export default Pages;
