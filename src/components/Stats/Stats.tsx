// src/components/Stats/Stats.tsx
import React from "react";
import { useBotStats } from "../../hooks/useBotStats";
import "./Stats.css";

const Stats: React.FC = () => {
  const { stats, loading, error } = useBotStats();

  if (loading) {
    return (
      <section id="stats" className="stats">
        <div className="container">
          <h2>Statistics</h2>
          <div className="stats-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="stat loading">
                <div className="loading-bar"></div>
                <div className="loading-bar short"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="stats">
        <div className="container">
          <h2>Statistics</h2>
          <div className="error-message">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stats" className="stats">
      <div className="container">
        <h2>Live Statistics</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-icon">🏢</div>
            <h3>{stats.guilds.toLocaleString()}</h3>
            <p>Servers</p>
          </div>
          <div className="stat">
            <div className="stat-icon">👥</div>
            <h3>{stats.users.toLocaleString()}</h3>
            <p>Users</p>
          </div>
          <div className="stat">
            <div className="stat-icon">⚙️</div>
            <h3>{stats.commands}</h3>
            <p>Commands</p>
          </div>
          <div className="stat">
            <div className="stat-icon">📈</div>
            <h3>{stats.uptime}</h3>
            <p>Uptime</p>
          </div>
          <div className="stat">
            <div className="stat-icon">🏓</div>
            <h3>{stats.ping}ms</h3>
            <p>Ping</p>
          </div>
        </div>
        <div className="stats-update">
          <p>Updates every 30 seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
