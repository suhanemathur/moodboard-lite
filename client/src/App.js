// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [theme, setTheme] = useState('light'); 

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Router>
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="container py-4">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onAuth={handleAuth} />}
            />
            <Route
              path="/signup"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup onAuth={handleAuth} />}
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard theme={theme} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
