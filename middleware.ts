import { NextRequest, NextResponse } from "next/server";
import { corsMiddleware } from "@middlewares/cors-middleware";
import { intlMiddleware } from "@middlewares/intl-middleware";
import { authMiddleware } from "@middlewares/auth-middleware";
import { isPublicPage } from "@utils/isPublicPage";

export default function middleware(req: NextRequest) {
  const corsResponse = corsMiddleware(req);
  if (corsResponse.status !== 200) return corsResponse;
  if (req.nextUrl.pathname.startsWith("/api")) return NextResponse.next();

  if (isPublicPage(req.nextUrl.pathname)) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/api/:path*"],
};
