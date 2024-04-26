"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!data.email || !data.password)
      return setError("Must provide all the credentials");

    setError("");
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res.error) {
        setIsLoading(false);
        return setError("Invalid credentials");
      }
      router.replace("/admin/clients");
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 'calc(100vh - 300px)',
      }}
    >
      {error && (
        <Typography sx={{ color: "error.main", mb: 1 }}>{error}</Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: isMobile ? 2 : 4,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
          mx: "auto",
        }}
      >
        <TextField
          id="email-input"
          label="Email"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          variant="outlined"
          sx={{ mb: 2, width: "100%" }}
        />
        <TextField
          id="password-input"
          label="Password"
          value={data.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
          variant="outlined"
          type="password"
          sx={{ mb: 2, width: "100%" }}
        />
        <Button
          onClick={handleSubmit}
          sx={{
            mt: 1,
            width: "100%",
            minHeight: "50px",
            bgcolor: "rgba(151, 71, 255, 1)",
            color: "white",
            "&:hover": {
              color: "black",
              bgcolor: "rgba(151, 71, 255, 0.8)",
            },
          }}
          variant="outlined"
        >
          {isLoading ? <CircularProgress /> : "Log in"}
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
