import ClientList from "@components/Pages/AdminPage/ClientList";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  return <ClientList />;
};

export default AdminPage;
