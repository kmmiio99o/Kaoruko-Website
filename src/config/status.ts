// Status page configuration
// Update these endpoints with your actual service URLs

export const STATUS_CONFIG = {
  // Discord Bot - your actual bot status endpoint
  BOT_ENDPOINT: "",

  // API Server - your actual API health endpoint
  API_ENDPOINT: "",

  // Database - your actual database health endpoint
  DATABASE_ENDPOINT: "",

  // Check interval in milliseconds (30 seconds)
  CHECK_INTERVAL: 30000,

  // Request timeout in milliseconds (5 seconds)
  REQUEST_TIMEOUT: 5000,

  // Response time threshold for degraded status (1 second)
  DEGRADED_THRESHOLD: 1000,
};
