import Link from "next/link";
import { Box, Button } from "@mui/material";
import Provider from "@components/Provider";

export default function AdminLayout({ children }) {
  return (
    <Provider>
      <Box
        sx={{
          color: "white",
          maxWidth: 1512,
          ml: "auto",
          mr: "auto",
          mt:15
        }}
      >
        <Box sx={{ display: "flex", color: "white", position: "relative" }}>
          <Link href="/admin" passHref>
            <Button sx={{ display: "flex", fontSize: 20, mr: 2 }}>
              Мои клиенты
            </Button>
          </Link>
          <Link href="/admin/pages" passHref>
            <Button sx={{ display: "flex", fontSize: 20, mr: 2 }}>
              Редактировать страниц
            </Button>
          </Link>
        </Box>
        <main>
          {children}
        </main>
      </Box>
    </Provider>
  );
}
