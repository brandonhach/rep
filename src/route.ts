// Arrays of routes accessible to the public
export const publicRoutes = ['/', '/learn'];

// Array of routes used for authentication (redirect user to /dashboard)
export const authRoutes = ['/login', '/signup'];

// Prefix for API auth routes. Used for API authentication purposes
export const apiAuthPrefix = '/api/auth';

// Default route after logging in
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
