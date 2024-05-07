import Nav from "@components/Nav";
import "../styles/globals.css";
import Footer from "@components/Footer";
import { Play, Roboto } from "next/font/google";
import Provider from "@components/Provider";

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

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Provider session={session}>
            <Nav />
            <main style={{ flexGrow: 1, marginTop: 100 }}>{children}</main>
            <div style={{ marginTop: "auto" }}>
              <Footer />
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}