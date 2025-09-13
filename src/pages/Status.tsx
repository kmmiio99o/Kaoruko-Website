import React, { useState, useEffect } from 'react';
import Stats from '../components/Stats/Stats';
import Loader from '../components/Loader/Loader';
import { STATUS_CONFIG } from '../config/status';
import './Status.css';

const Status: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    bot: 'checking',
    api: 'checking',
    database: 'checking',
    overall: 'checking'
  });
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkServiceStatus = async (service: string, endpoint: string): Promise<'operational' | 'degraded' | 'outage'> => {
    try {
      const startTime = Date.now();
      const response = await fetch(endpoint, { 
        method: 'GET',
        headers: {
          'Accept': 'text/html,application/json,*/*',
        },
        // Add timeout
        signal: AbortSignal.timeout(STATUS_CONFIG.REQUEST_TIMEOUT)
      });
      const responseTime = Date.now() - startTime;
      
      if (response.ok) {
        // For bot endpoint, check if response contains "Bot is alive"
        if (service === 'bot') {
          const text = await response.text();
          if (text.includes('Bot is alive')) {
            return responseTime < STATUS_CONFIG.DEGRADED_THRESHOLD ? 'operational' : 'degraded';
          }
        }
        return responseTime < STATUS_CONFIG.DEGRADED_THRESHOLD ? 'operational' : 'degraded';
      } else {
        return 'outage';
      }
    } catch (error) {
      console.error(`Error checking ${service}:`, error);
      return 'outage';
    }
  };

  const checkAllServices = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Check Discord Bot API
      const botStatus = await checkServiceStatus('bot', STATUS_CONFIG.BOT_ENDPOINT);
      
      // Check your API server
      const apiStatus = await checkServiceStatus('api', STATUS_CONFIG.API_ENDPOINT);
      
      // Check database
      const databaseStatus = await checkServiceStatus('database', STATUS_CONFIG.DATABASE_ENDPOINT);
      
      // Determine overall status
      const statuses = [botStatus, apiStatus, databaseStatus];
      const overallStatus = statuses.includes('outage') ? 'outage' : 
                           statuses.includes('degraded') ? 'degraded' : 'operational';
      
      setSystemStatus({
        bot: botStatus,
        api: apiStatus,
        database: databaseStatus,
        overall: overallStatus
      });
      
      setLastChecked(new Date());
    } catch (err) {
      setError('Failed to check service status. Please try again.');
      setSystemStatus({
        bot: 'outage',
        api: 'outage',
        database: 'outage',
        overall: 'outage'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAllServices();
    
    // Check every 30 seconds
    const interval = setInterval(checkAllServices, STATUS_CONFIG.CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="status-page">
        <div className="container">
          <div className="status-header">
            <h1>System Status</h1>
            <p>Checking system health...</p>
          </div>
          <Loader size="large" text="Loading status information..." />
        </div>
      </div>
    );
  }

  return (
    <div className="status-page">
      <div className="container">
        <div className="status-header">
          <h1>System Status</h1>
          <p>Real-time monitoring of all Kaoruko services</p>
        </div>

        {error && (
          <div className="status-error">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
            <button onClick={checkAllServices} className="retry-btn">
              Retry Check
            </button>
          </div>
        )}

        <div className="status-overview">
          <div className={`status-card overall ${systemStatus.overall}`}>
            <div className={`status-indicator ${systemStatus.overall}`}></div>
            <div className="status-info">
              <h3>
                {systemStatus.overall === 'operational' && 'All Systems Operational'}
                {systemStatus.overall === 'degraded' && 'Some Services Degraded'}
                {systemStatus.overall === 'outage' && 'Service Outage'}
                {systemStatus.overall === 'checking' && 'Checking Services...'}
              </h3>
              <p>
                {systemStatus.overall === 'operational' && 'All services are running normally'}
                {systemStatus.overall === 'degraded' && 'Some services are experiencing issues'}
                {systemStatus.overall === 'outage' && 'One or more services are down'}
                {systemStatus.overall === 'checking' && 'Checking service status...'}
              </p>
            </div>
          </div>
        </div>

        <div className="status-grid">
          <div className="status-card">
            <div className="status-header-card">
              <h3>🤖 Discord Bot</h3>
              <div className={`status-indicator ${systemStatus.bot}`}></div>
            </div>
            <p className="status-description">
              Bot connectivity and command processing
            </p>
            <div className="status-details">
              <span className="status-label">Status:</span>
              <span className={`status-value ${systemStatus.bot}`}>
                {systemStatus.bot === 'operational' && 'Operational'}
                {systemStatus.bot === 'degraded' && 'Degraded'}
                {systemStatus.bot === 'outage' && 'Outage'}
                {systemStatus.bot === 'checking' && 'Checking...'}
              </span>
            </div>
          </div>

          <div className="status-card">
            <div className="status-header-card">
              <h3>🌐 API Server</h3>
              <div className={`status-indicator ${systemStatus.api}`}></div>
            </div>
            <p className="status-description">
              REST API and WebSocket endpoints
            </p>
            <div className="status-details">
              <span className="status-label">Status:</span>
              <span className={`status-value ${systemStatus.api}`}>
                {systemStatus.api === 'operational' && 'Operational'}
                {systemStatus.api === 'degraded' && 'Degraded'}
                {systemStatus.api === 'outage' && 'Outage'}
                {systemStatus.api === 'checking' && 'Checking...'}
              </span>
            </div>
          </div>

          <div className="status-card">
            <div className="status-header-card">
              <h3>🗄️ Database</h3>
              <div className={`status-indicator ${systemStatus.database}`}></div>
            </div>
            <p className="status-description">
              Database connectivity and queries
            </p>
            <div className="status-details">
              <span className="status-label">Status:</span>
              <span className={`status-value ${systemStatus.database}`}>
                {systemStatus.database === 'operational' && 'Operational'}
                {systemStatus.database === 'degraded' && 'Degraded'}
                {systemStatus.database === 'outage' && 'Outage'}
                {systemStatus.database === 'checking' && 'Checking...'}
              </span>
            </div>
          </div>
        </div>

        <div className="status-footer">
          <p>Last checked: {lastChecked ? lastChecked.toLocaleString() : 'Never'}</p>
          <p>Status page updates every 30 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
