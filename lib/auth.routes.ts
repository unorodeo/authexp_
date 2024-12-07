export const REDIRECT_SIGNUP = (email: string): `/verify?email=${string}` =>
  `/verify?email=${email}`;

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
