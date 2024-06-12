import { withAuth } from 'next-auth/middleware';
import { intlMiddleware } from './intl-middleware';

 export const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ token }) => token != null,
  },
  pages: {
    signIn: "/login",
  },
});