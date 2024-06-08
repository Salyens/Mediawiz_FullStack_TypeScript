import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'ru'];

export const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localeDetection: false,
});

