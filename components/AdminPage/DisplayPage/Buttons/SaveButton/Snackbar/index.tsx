import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { SnackbarSeverityType } from "../../../../../../types/admin";

interface SaveSnackbarProps {
  snackbarOpen: boolean;
  setSnackbarOpen: (open: boolean) => void;
  snackbarSeverity: SnackbarSeverityType
  snackbarMessage: string;
}

const SaveSnackbar: React.FC<SaveSnackbarProps> = ({
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
        severity={snackbarSeverity || "info"} 
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SaveSnackbar;
