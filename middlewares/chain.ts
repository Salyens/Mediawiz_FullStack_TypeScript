// import createMiddleware from 'next-intl/middleware';
// import { withAuth } from 'next-auth/middleware';
// import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
// import { corsMiddleware } from '@middlewares/cors-middleware';

// const locales = ['en', 'ru'];

// const intlMiddleware = createMiddleware({
//   locales: locales,
//   defaultLocale: 'en',
//   localeDetection: false,
// });

// const authMiddleware = withAuth(
//   function onSuccess(req: NextRequest) {
//     const cookies = parseCookies({ req });
//     const cookieLocale = cookies['NEXT_LOCALE'];

//     if (!cookieLocale) {
//       const locale = req.nextUrl.locale || 'en';
//       setCookie({ res: req }, 'NEXT_LOCALE', locale, { path: '/' });
//     }

//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: '/login',
//     },
//   }
// );

// export default function middleware(req: NextRequest, event: NextFetchEvent) {

//     const corsResponse = corsMiddleware(req);
//     if (corsResponse.status !== 200) {
//       console.log('CORS check failed');
//       return corsResponse;
//     }

//   const cookies = parseCookies({ req });
//   const cookieLocale = cookies['NEXT_LOCALE'];
//   console.log('cookieLocale: ', cookieLocale);

//   const url = req.nextUrl.clone();
//   console.log('pathname: ', url.pathname);


//   if (url.pathname.startsWith('/api')) {
//     return NextResponse.next();
//   }


//   if (!cookieLocale) {
//     setCookie({ res: req }, 'NEXT_LOCALE', 'en', { path: '/' });
//   } else if (!url.pathname.startsWith(`/${cookieLocale}`) && !url.pathname.startsWith('/api')) {
//     url.pathname = `/${cookieLocale}${url.pathname}`;
//     console.log('cookieLocale: ', cookieLocale);
//     return NextResponse.redirect(url);
//   }

//   const excludePattern = '^(/(' + locales.join('|') + '))?/admin/?.*?$';
//   const publicPathnameRegex = RegExp(excludePattern, 'i');
//   const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     return authMiddleware(req as any, event);
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)', '/api/:path*'],
// };












// import createMiddleware from "next-intl/middleware";
// import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
// import { corsMiddleware } from "@middlewares/cors-middleware";

// const locales = ["en", "ru"];

// const intlMiddleware = createMiddleware({
//   locales: locales,
//   defaultLocale: "en",
//   localeDetection: false,
// });

// const authMiddleware = withAuth(
//   function onSuccess(req: NextRequest) {
//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: "/login",
//     },
//   }
// );

// export default function middleware(req: NextRequest, event: NextFetchEvent) {
  
//   const corsResponse = corsMiddleware(req);
//   if (corsResponse.status !== 200) {
//     console.log("CORS check failed");
//     return corsResponse;
//   }

//   const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
//   const url = req.nextUrl.clone();
//   const urlPaths = url.pathname.split("/");

//   if (url.pathname.startsWith("/api")) {
//     return NextResponse.next();
//   }

//   if (!cookieLocale) {
//     if (url.pathname.startsWith("/en") || url.pathname.startsWith("/ru")) {
//       const response = NextResponse.redirect(url);
//       response.cookies.set("NEXT_LOCALE", urlPaths[1]);
//       return response;
//     } else {
//       const response = NextResponse.redirect(url);
//       response.cookies.set("NEXT_LOCALE", "en");
//       return response;
//     }
//   } else if (!url.pathname.startsWith(`/${cookieLocale}`)) {
//     url.pathname = `/${cookieLocale}${url.pathname}`;
//     return NextResponse.redirect(url);
//   }

//   if (urlPaths.includes("admin")) return authMiddleware(req as any, event);
//   return intlMiddleware(req);
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)", "/api/:path*"],
// };

