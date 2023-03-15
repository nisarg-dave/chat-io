import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Pages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <Router>{isAuthenticated ? <></> : <LoginPage></LoginPage>}</Router>
    </Flex>
  );
}

export default Pages;
