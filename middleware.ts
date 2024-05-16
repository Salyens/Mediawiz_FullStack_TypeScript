import createMiddleware from 'next-intl/middleware';
import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import { setCookie } from 'nookies';

const locales = ['en', 'ru'];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localeDetection: false,
});

const authMiddleware = withAuth(
  function onSuccess(req: NextRequest) {
    const cookieHeader = req.headers.get('cookie');
    let cookieLocale = null;

    if (cookieHeader) {
      const cookies = cookieHeader.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
      }, {} as { [key: string]: string });

      cookieLocale = cookies['NEXT_LOCALE'];
    }

    if (!cookieLocale) {
      const locale = req.nextUrl.locale || 'en';
      setCookie({ res: req }, 'NEXT_LOCALE', locale, { path: '/' });
    }

    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/login',
    },
  }
);

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const cookieHeader = req.headers.get('cookie');
  let cookieLocale = null;

  if (cookieHeader) {
    const cookies = cookieHeader.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as { [key: string]: string });

    cookieLocale = cookies['NEXT_LOCALE'];
  }

  const url = req.nextUrl.clone();

  if (!cookieLocale) {
    setCookie({ res: req }, 'NEXT_LOCALE', 'en', { path: '/' });
  } else if (!url.pathname.startsWith(`/${cookieLocale}`)) {
    url.pathname = `/${cookieLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  }

  const excludePattern = '^(/(' + locales.join('|') + '))?/admin/?.*?$';
  const publicPathnameRegex = RegExp(excludePattern, 'i');
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req as any, event);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
