import React, { useEffect, useState, useRef, createContext } from 'react';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';

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
    <AuthContext.Provider value={{ username, password, isAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default Pages;
