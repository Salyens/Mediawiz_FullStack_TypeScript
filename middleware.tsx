export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/admin/clients", "/admin", "/admin/pages", "/admin/pages/:path*"],
};
