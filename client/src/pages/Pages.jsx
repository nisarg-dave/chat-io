import React, { useState, createContext } from 'react';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import pb from '../lib/pocketbase';

export const CurrentUserContext = createContext();

function Pages() {
  const [currentUser, setCurrentUser] = useState(null);

  pb.authStore.onChange(auth => {
    console.log('authStore changed', auth);
    // If user is not logged in then, auth store model is null
    setCurrentUser(pb.authStore.model);
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default Pages;
