import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigateAndScrollToTop } from '../../utils/scrollToTop';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title display-medium">
              Meet <span className="gradient-text">Kaoruko</span>
            </h1>
            <p className="hero-subtitle headline-small">
              Your advanced Discord companion with powerful features and seamless integration
            </p>
            <div className="hero-buttons">
              <a 
                href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Invite to Server
              </a>
                    <button 
                      className="btn-secondary"
                      onClick={() => navigateAndScrollToTop(navigate, '/commands')}
                    >
                      View Commands
                    </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="bot-avatar">
              <div className="avatar-container">
                <img 
                  src="https://cdn.discordapp.com/avatars/1398003581512056854/a_940a43c9f073d76847788a8982f08c25.gif?size=1024&animated=true" 
                  alt="Kaoruko Bot Avatar" 
                  className="avatar-image"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'block';
                    }
                  }}
                />
                <div className="avatar-emoji-fallback" style={{display: 'none'}}>🤖</div>
                <div className="avatar-glow"></div>
                <div className="avatar-pulse"></div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">⚡</div>
                <div className="card-text">Lightning Fast</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🔒</div>
                <div className="card-text">Secure</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎨</div>
                <div className="card-text">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
