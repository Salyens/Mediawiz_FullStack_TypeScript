import { NextRequest, NextResponse } from "next/server";

export default function manageCookieMiddleware(req: NextRequest) {
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const url = req.nextUrl.clone();
  const urlPaths = url.pathname.split("/");

  if (url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (!cookieLocale) {
    if (url.pathname.startsWith("/en") || url.pathname.startsWith("/ru")) {
      const response = NextResponse.redirect(url);
      response.cookies.set("NEXT_LOCALE", urlPaths[1]);
      return response;
    } else {
      const response = NextResponse.redirect(url);
      response.cookies.set("NEXT_LOCALE", "en");
      return response;
    }
  } else if (!url.pathname.startsWith(`/${cookieLocale}`)) {
    url.pathname = `/${cookieLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  } else {
    if (urlPaths.includes("ru") && urlPaths.includes("en")) {
      const rightPath = "/" + urlPaths.slice(2).join("/");
      url.pathname = rightPath;
      const response = NextResponse.redirect(url);
      response.cookies.set("NEXT_LOCALE", urlPaths[2]);
      return response;
    }
  }
}
