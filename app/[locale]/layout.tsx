import Nav from "@components/Nav";
import "../../styles/globals.css";
import Footer from "@components/Footer";
import { Play, Roboto } from "next/font/google";
import Provider from "@components/Provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { AppWrapper } from "@context";

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
  session: any;
  params: {
    locale: "en" | "ru";
  };
}

export default async function RootLayout({
  children,
  session,
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
          <Provider session={session}>
            <AppWrapper>
              <NextIntlClientProvider messages={messages}>
                <Nav/>
                <main style={{ flexGrow: 1 }}>{children}</main>
                <div style={{ marginTop: "auto" }}>
                  <Footer />
                </div>
              </NextIntlClientProvider>
            </AppWrapper>
          </Provider>
        </div>
      </body>
    </html>
  );
}
