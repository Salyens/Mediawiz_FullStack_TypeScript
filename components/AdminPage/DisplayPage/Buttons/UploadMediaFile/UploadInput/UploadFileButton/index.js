import { Box, Button, Typography } from "@mui/material";
import React from "react";

const UploadFileButton = ({ handleButtonClick, type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        component="span"
        onClick={handleButtonClick}
      >
        Upload File
      </Button>
      <Typography variant="caption" color="initial">
        {type === "image" ? "Max size 5 MB" : "Max size 30 MB"}
      </Typography>
    </Box>
  );
};

export default UploadFileButton;
