import { locales } from "@navigation";

const publicPages = ["/", "/login", "/smm", "/smmAd", "/web", "/webAd"];

export function isPublicPage(pathname: string): boolean {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  return publicPathnameRegex.test(pathname);
}
