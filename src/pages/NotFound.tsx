import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-visual">
            <div className="error-code">404</div>
            <div className="error-emoji">🤖</div>
          </div>
          
          <div className="not-found-text">
            <h1>Oops! Page Not Found</h1>
            <p>
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best bots sometimes get lost!
            </p>
            
            <div className="not-found-actions">
              <Link to="/" className="btn-primary">
                🏠 Go Home
              </Link>
              <Link to="/commands" className="btn-secondary">
                📋 Browse Commands
              </Link>
            </div>
          </div>
        </div>
        
        <div className="not-found-suggestions">
          <h3>Maybe you were looking for:</h3>
          <div className="suggestion-links">
            <Link to="/" className="suggestion-link">
              <span className="suggestion-icon">🏠</span>
              <span>Home</span>
            </Link>
            <Link to="/commands" className="suggestion-link">
              <span className="suggestion-icon">📋</span>
              <span>Commands</span>
            </Link>
            <Link to="/status" className="suggestion-link">
              <span className="suggestion-icon">📊</span>
              <span>Status</span>
            </Link>
            <Link to="/support" className="suggestion-link">
              <span className="suggestion-icon">💬</span>
              <span>Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
