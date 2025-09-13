import React from 'react';
import './Privacy.css';

const Privacy: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>
              Kaoruko bot collects minimal data necessary to provide its services:
            </p>
            <ul>
              <li><strong>Server Information:</strong> Server ID, name, and basic configuration settings</li>
              <li><strong>User Data:</strong> User ID, username, and Discord profile information when interacting with the bot</li>
              <li><strong>Command Usage:</strong> Commands executed and timestamps for functionality purposes</li>
              <li><strong>Configuration Data:</strong> Bot settings and preferences set by server administrators</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide bot functionality and respond to commands</li>
              <li>Maintain server-specific settings and configurations</li>
              <li>Improve bot performance and user experience</li>
              <li>Ensure proper bot operation and security</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Data Storage and Security</h2>
            <p>
              All data is stored securely using industry-standard encryption. We implement appropriate 
              security measures to protect your information against unauthorized access, alteration, 
              disclosure, or destruction.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              Data may only be shared in the following circumstances:
            </p>
            <ul>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of data collection (by removing the bot from your server)</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to provide our services. Data is 
              automatically deleted when:
            </p>
            <ul>
              <li>The bot is removed from your server</li>
              <li>You request data deletion</li>
              <li>Data is no longer needed for service provision</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Third-Party Services</h2>
            <p>
              Our bot may integrate with third-party services (Discord API, external APIs). 
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any 
              material changes by posting the new Privacy Policy on this page and updating the 
              "Last updated" date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our Discord server or support channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
