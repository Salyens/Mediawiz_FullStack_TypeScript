import Nav from "@components/Nav";
import "../../styles/globals.css";
import Footer from "@components/Footer";
import { Play, Roboto } from "next/font/google";
import Provider from "@components/Provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
            <NextIntlClientProvider messages={messages}>
              <Nav locale={locale} />
              <main
                className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24"
                style={{ flexGrow: 1 }}
              >
                {children}
              </main>
              <div style={{ marginTop: "auto" }}>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}
