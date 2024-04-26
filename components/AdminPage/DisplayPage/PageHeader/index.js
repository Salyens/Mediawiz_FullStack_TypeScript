import React from "react";
import { Typography } from "@mui/material";

const PageHeader = ({ data }) => {
  if (Object.keys(data).length) {
    return (
      <Typography
        sx={{ textAlign: "center", color: "white" }}
        variant="h4"
        color="initial"
      >
        Редактирование страницы "{data.languages.ru.pageName}"
      </Typography>
    );
  } else return null;
};

export default PageHeader;
