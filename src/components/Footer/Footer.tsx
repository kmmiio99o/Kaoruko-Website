import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigateAndScrollToTop } from '../../utils/scrollToTop';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/#features' },
      { name: 'Commands', href: '/commands' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Status', href: '/status' }
    ],
    community: [
      { name: 'Discord Server', href: 'https://discord.gg/cYZPfXcBGB' },
      { name: 'GitHub', href: 'https://github.com/kmmiio99o/Kaoruko-Bot-Next' }
    ]
  };

  const socialLinks = [
    { name: 'Discord', icon: '💬', href: 'https://discord.gg/cYZPfXcBGB' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/kmmiio99o/Kaoruko-Bot-Next' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img 
                src="https://cdn.discordapp.com/avatars/1398003581512056854/a_940a43c9f073d76847788a8982f08c25.gif?size=64&animated=true" 
                alt="Kaoruko Bot" 
                className="footer-logo-icon"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              <div className="footer-logo-emoji-fallback" style={{display: 'none'}}>🤖</div>
              <span className="footer-logo-text">Kaoruko</span>
            </Link>
            <p className="footer-description">
              The advanced Discord bot with powerful features and  
              seamless integration.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-title">Product</h3>
                    <ul className="footer-list">
                      {footerLinks.product.map((link, index) => (
                        <li key={index}>
                          {link.href.startsWith('/#') ? (
                            <a 
                              href={link.href} 
                              className="footer-link"
                              onClick={(e) => {
                                e.preventDefault();
                                if (link.href === '/#features') {
                                  const element = document.getElementById('features');
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                  }
                                } else {
                                  navigateAndScrollToTop(navigate, link.href);
                                }
                              }}
                            >
                              {link.name}
                            </a>
                          ) : (
                            <button 
                              className="footer-link"
                              onClick={() => navigateAndScrollToTop(navigate, link.href)}
                              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                            >
                              {link.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
          </div>

                  <div className="footer-column">
                    <h3 className="footer-title">Community</h3>
                    <ul className="footer-list">
                      {footerLinks.community.map((community, index) => (
                        <li key={index}>
                          <a href={community.href} className="footer-link">
                            {community.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="footer-column">
                    <h3 className="footer-title">Legal</h3>
                    <ul className="footer-list">
                      <li>
                        <button 
                          className="footer-link"
                          onClick={() => navigateAndScrollToTop(navigate, '/privacy')}
                          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        >
                          Privacy Policy
                        </button>
                      </li>
                      <li>
                        <button 
                          className="footer-link"
                          onClick={() => navigateAndScrollToTop(navigate, '/terms')}
                          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        >
                          Terms of Service
                        </button>
                      </li>
                    </ul>
                  </div>
        </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Kaoruko. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
