import Link from "next/link";
import Provider from "@components/Provider";

export default function AdminLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Provider session={session}>
      <div className="main_container p-2">
        <div className="flex gap-2 mt-3 mb-2">
          <Link href="/admin" passHref>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              МОИ КЛИЕНТЫ
            </button>
          </Link>
          <Link href="/admin/pages" passHref>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              РЕДАКТИРОВАТЬ СТРАНИЦЫ
            </button>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    </Provider>
  );
}
