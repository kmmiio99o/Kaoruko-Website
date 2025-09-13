import React from 'react';
import './Support.css';

const Support: React.FC = () => {

  const supportOptions = [
    {
      icon: '💬',
      title: 'Discord Support',
      description: 'Get help from our community and staff',
      action: 'Join Discord',
      href: '#'
    },
    {
      icon: '🐛',
      title: 'Report Bug',
      description: 'Found a bug? Let us know',
      action: 'Report',
      href: '#'
    },
    {
      icon: '💡',
      title: 'Feature Request',
      description: 'Suggest new features',
      action: 'Suggest',
      href: '#'
    }
  ];

  return (
    <div className="support-page">
      <div className="container">
        <div className="support-header">
          <h1>Support Center</h1>
          <p>We're here to help you get the most out of Kaoruko</p>
        </div>

        <div className="support-content">
          <div className="support-options">
            <h2>Get Help</h2>
            <div className="options-grid">
              {supportOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className="support-option"
                >
                  <div className="option-icon">{option.icon}</div>
                  <div className="option-content">
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                    <span className="option-action">{option.action}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
