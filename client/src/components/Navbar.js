// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout, theme, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">🎨 Moodboard</Link>

        <div className="d-flex">
          <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm me-2">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>

          {isAuthenticated ? (
            <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-primary btn-sm me-2">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
