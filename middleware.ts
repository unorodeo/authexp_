import {
  REDIRECT_SIGNIN,
  protectedRoutes,
  publicRoutes,
} from "@/lib/auth.routes";

import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const isAuthed = req.auth;

  if (!isAuthed && protectedRoutes.includes(req.nextUrl.pathname)) {
    const url = new URL("/sign-in", req.nextUrl.origin);
    return Response.redirect(url);
  }

  if (isAuthed && publicRoutes.includes(req.nextUrl.pathname)) {
    const url = new URL(REDIRECT_SIGNIN, req.nextUrl.origin);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/(api|trpc)(.*)",
  ],
};
