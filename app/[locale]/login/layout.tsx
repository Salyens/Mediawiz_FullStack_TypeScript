import Provider from "@components/Provider";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: Readonly<AdminLayoutProps>) {
  return <Provider>{children}</Provider>;
}
