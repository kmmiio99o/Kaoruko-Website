// Route configuration for the application
export const ROUTES = {
  HOME: '/',
  COMMANDS: '/commands',
  DASHBOARD: '/dashboard',
  STATUS: '/status',
  SUPPORT: '/support'
} as const;

export type RouteKey = keyof typeof ROUTES;
