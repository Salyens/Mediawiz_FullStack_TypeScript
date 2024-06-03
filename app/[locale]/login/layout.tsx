import Provider from "@components/Provider";

interface AdminLayoutProps {
  children: React.ReactNode;
  session: any;
}

export default function AdminLayout({
  children,
  session,
}: Readonly<AdminLayoutProps>) {
  return <Provider session={session}>{children}</Provider>;
}
