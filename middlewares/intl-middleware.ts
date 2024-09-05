import createIntlMiddleware from "next-intl/middleware";
import { locales } from "../navigation";

export const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});
