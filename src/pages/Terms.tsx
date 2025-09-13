import React from 'react';
import './Terms.css';

const Terms: React.FC = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Kaoruko bot, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              Kaoruko is a Discord bot that provides various features and functionalities 
              to enhance your Discord server experience. The bot is provided "as is" and 
              we reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. User Responsibilities</h2>
            <p>Users are responsible for:</p>
            <ul>
              <li>Complying with Discord's Terms of Service and Community Guidelines</li>
              <li>Using the bot in accordance with applicable laws and regulations</li>
              <li>Not using the bot for illegal, harmful, or malicious purposes</li>
              <li>Respecting other users and maintaining appropriate conduct</li>
              <li>Not attempting to exploit, hack, or abuse the bot's functionality</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Prohibited Uses</h2>
            <p>You may not use Kaoruko bot to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Distribute spam, malware, or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the bot for commercial purposes without permission</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Service Availability</h2>
            <p>
              We strive to maintain high service availability, but we do not guarantee 
              uninterrupted access. The service may be temporarily unavailable due to 
              maintenance, updates, or technical issues.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Data and Privacy</h2>
            <p>
              Your use of the bot is also governed by our Privacy Policy. By using the 
              service, you consent to the collection and use of information as described 
              in our Privacy Policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              The Kaoruko bot and its original content, features, and functionality are 
              owned by us and are protected by international copyright, trademark, and 
              other intellectual property laws.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall we be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of 
              profits, data, use, goodwill, or other intangible losses, resulting from 
              your use of the service.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your access to the bot immediately, without 
              prior notice or liability, for any reason whatsoever, including without 
              limitation if you breach the Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these 
              Terms at any time. If a revision is material, we will try to provide at 
              least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the jurisdiction 
              in which we operate, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us 
              through our Discord server or support channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
