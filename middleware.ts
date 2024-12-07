import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const isLoggedIn = !!req.auth;
  console.log("IS_LOGGED_IN:", isLoggedIn, "ON_ROUTE:", req.nextUrl.pathname);
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - /(marketing) routes
     * - trpc endpoints
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    // marketing routes
    "/",
    "/about",
    "/contact",
    "/colophon",
    // trpc endpoints
    "/(api|trpc)(.*)",
  ],
};
