import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SaveSnackbar = ({
  snackbarOpen,
  setSnackbarOpen,
  snackbarSeverity,
  snackbarMessage,
}) => {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ mt: "30vh" }}
    >
      <Alert
        onClose={() => setSnackbarOpen(false)}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SaveSnackbar;
