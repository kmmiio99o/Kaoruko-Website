export interface BotStats {
  guilds: number;
  users: number;
  uptime: string;
  commands: number;
  ping: number;
}

// Mock API call - replace with actual API connection
export const fetchBotStats = async (): Promise<BotStats> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real implementation, this would be:
  // const response = await fetch('http://your-bot-api:3001/stats');
  // return await response.json();

  return {
    guilds: Math.floor(1250 + Math.random() * 50),
    users: Math.floor(50000 + Math.random() * 1000),
    commands: 45,
    ping: Math.floor(40 + Math.random() * 100),
    uptime: calculateUptime(),
  };
};

const calculateUptime = (): string => {
  const days = Math.floor(Math.random() * 30);
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
