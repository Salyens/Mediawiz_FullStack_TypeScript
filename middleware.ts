import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";
import { locales } from "@navigation";


const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localeDetection: false,
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  const excludePattern = "^(/(" + locales.join("|") + "))?/admin/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};