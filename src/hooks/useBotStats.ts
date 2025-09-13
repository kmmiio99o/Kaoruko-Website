import { useState, useEffect } from "react";

interface BotStats {
  guilds: number;
  users: number;
  uptime: string;
  commands: number;
  ping: number;
}

export const useBotStats = () => {
  const [stats, setStats] = useState<BotStats>({
    guilds: 0,
    users: 0,
    uptime: "0d 0h 0m 0s",
    commands: 0,
    ping: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // This would connect to your bot's API
        // For now, we'll use mock data that updates periodically
        const mockStats = {
          guilds: Math.floor(1250 + Math.random() * 50),
          users: Math.floor(50000 + Math.random() * 1000),
          commands: 45,
          ping: Math.floor(40 + Math.random() * 100),
          uptime: calculateUptime(),
        };

        setStats(mockStats);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bot stats");
        setLoading(false);
      }
    };

    fetchStats();

    // Update stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return { stats, loading, error };
};

// Helper function to calculate uptime
const calculateUptime = (): string => {
  const days = Math.floor(Math.random() * 30);
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
