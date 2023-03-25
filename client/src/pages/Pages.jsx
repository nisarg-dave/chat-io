import React, { useState, createContext, useEffect } from 'react';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import pb from '../lib/pocketbase';

export const CurrentUserContext = createContext();

function Pages() {
  const [currentUser, setCurrentUser] = useState(null);

  pb.authStore.onChange(auth => {
    // If user is not logged in then, auth store model is null
    setCurrentUser(pb.authStore.model);
  });

  return (
    <Router>
      {!currentUser ? (
        <LoginPage />
      ) : (
        <CurrentUserContext.Provider value={{ currentUser }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </Router>
  );
}

export default Pages;
