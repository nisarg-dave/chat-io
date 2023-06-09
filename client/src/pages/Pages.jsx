import React, { useState, createContext } from 'react';
import SignUpPage from './SignUpPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import pb from '../lib/pocketbase';

export const CurrentUserContext = createContext();

function Pages() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem('pocketbase_auth'))?.model
  );

  pb.authStore.onChange(auth => {
    // If user is not logged in then, auth store model is null
    setCurrentUser(pb.authStore.model);
  });

  return (
    <Router>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute user={currentUser}>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ProtectedRoute user={currentUser} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </Router>
  );
}

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Pages;
