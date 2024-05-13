"use client";

import Link from "next/link";
import Provider from "@components/Provider";

interface AdminLayoutProps {
  children: React.ReactNode;
  session: any;
  params: {
    locale: string;
  };
}

export default function AdminLayout({
  children,
  session,
  params: { locale },
}: Readonly<AdminLayoutProps>) {

  return (
    <Provider session={session}>

        <div className="main_container p-2">
          <div className="flex gap-2 mt-3 mb-2">
            <Link href={`/${locale}/admin`} passHref>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              MY CLIENTS
              </button>
            </Link>
            <Link href={`/${locale}/admin/pages`} passHref>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              PAGES EDITING
              </button>
            </Link>
          </div>
          <main>{children}</main>
        </div>

    </Provider>
  );
}
