import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for speed with sub-second response times and efficient resource usage.',
      color: '#FFD700'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security in mind, featuring encrypted data and secure authentication.',
      color: '#00FF88'
    },
    {
      icon: '🔧',
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and documentation.',
      color: '#F39C12'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="headline-large">Powerful Features</h2>
          <p className="body-large">Everything you need to manage and grow your Discord community</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
