import React, { useEffect, useState, useRef, createContext } from 'react';
import SignUpPage from './SignUpPage';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './ChatPage';

export const AuthContext = createContext();

function Pages() {
  const username = useRef('');
  const password = useRef('');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ username, password }}>
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
    </AuthContext.Provider>
  );
}

export default Pages;
