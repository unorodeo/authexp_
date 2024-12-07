/**
 * collection of routes unauthenticated/unauthorized users can access
 */
export const publicRoutes = [
  // authentication
  "/sign-in",
  "/sign-up",
  "/verify",
  "/forgot-password",
  "/reset-password",
  
  // law
  "/terms",
  "/privacy",

  // marketing
  "/",
  "/about",
  "/contact",
  "/colophon",
  "/docs",
  "/docs/:path*",
];

/**
 * collection of routes authenticated/authorized users can access
 */
export const protectedRoutes = ["/studio", "/studio/:path*"];

/**
 * api prefix for authentication using Next route handlers
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default sign-in redirect path
 *
 * @default "/studio"
 */
export const REDIRECT_SIGNIN = "/studio";

/**
 * default sign-up redirect path
 */
export const REDIRECT_SIGNUP = "/verify?email=";

/**
 * default sign-up redirect function
 * 
 * @returns A path with the registered user's email as a `searchParam` 
 */
export const REDIRECT_SIGNUP_FN = (email: string) => {
  return REDIRECT_SIGNUP + email
}
