// Type definitions for the application

export interface BotStats {
  guilds: number;
  users: number;
  uptime: string;
  commands: number;
  ping: number;
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  discriminator: string;
}

export interface Server {
  id: string;
  name: string;
  icon?: string;
  memberCount: number;
  owner: boolean;
}

export interface Command {
  name: string;
  description: string;
  usage: string;
  category: string;
  permissions: string[];
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}
