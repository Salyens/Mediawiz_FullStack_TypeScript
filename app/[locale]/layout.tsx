import "../../styles/globals.css";
import Footer from "@components/Footer";
import { Play, Roboto } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("@components/Nav"), { ssr: false });

export const inter = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: "en" | "ru";
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NextIntlClientProvider messages={messages}>
            <DynamicNav />
            <main style={{ flexGrow: 1 }}>{children}</main>
            <div style={{ marginTop: "auto" }}>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
