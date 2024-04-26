import Nav from "@components/Nav";
import "../styles/globals.css";
import Footer from "@components/Footer";
import { Play, Roboto } from 'next/font/google'
 
export const inter = Play({
  weight:['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
export const roboto = Roboto({
  weight:['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Nav />
          <main style={{ flexGrow: 1, marginTop: 100 }}>{children}</main>
          <div style={{ marginTop: "auto" }}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
