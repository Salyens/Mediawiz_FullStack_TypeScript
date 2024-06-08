import { NextRequest, NextFetchEvent } from "next/server";
import { corsMiddleware } from "@middlewares/cors-middleware";
import { authMiddleware } from "@middlewares/auth-middleware";
import { intlMiddleware } from "@middlewares/intl-middleware";
import manageCookieMiddleware from "@middlewares/manageCookieMiddleware";

export default async function middleware(req: NextRequest, event: NextFetchEvent) {

  const corsResponse = corsMiddleware(req);
  if (corsResponse.status !== 200) {
    return corsResponse;
  }

  const cookieResponse = manageCookieMiddleware(req);
  if (cookieResponse) {
    return cookieResponse;
  }

  const url = req.nextUrl.clone();
  const urlPaths = url.pathname.split("/");
  if (urlPaths.includes("admin")) {
    return authMiddleware(req as any, event);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/api/:path*"],
};
