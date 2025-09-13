// src/components/Dashboard/Dashboard.tsx
import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Kaoruko Dashboard</h1>
        <p>Manage your server settings and bot configuration</p>
      </div>

      <div className="dashboard-content">
        <div className="coming-soon">
          <div className="coming-soon-icon">🚧</div>
          <h2>Coming Soon!</h2>
          <p>
            We're working hard to bring you an amazing dashboard experience.
          </p>
          <p>
            This feature is currently in development and will be available in a
            future update.
          </p>

          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "35%" }}></div>
            </div>
            <span className="progress-text">35% Complete</span>
          </div>

          <div className="feature-list">
            <h3>Planned Features:</h3>
            <ul>
              <li>Server configuration management</li>
              <li>Custom command creation</li>
              <li>User moderation tools</li>
              <li>Plugin marketplace</li>
              <li>Analytics and insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
