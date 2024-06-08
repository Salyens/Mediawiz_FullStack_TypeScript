import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';
import { intlMiddleware } from './intl-middleware';


export const authMiddleware = withAuth(
  function onSuccess(req: NextRequest) {
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