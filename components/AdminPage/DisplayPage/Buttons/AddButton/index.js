import React from "react";
import { Button, Box } from "@mui/material";

const AddButton = ({ currentPath, item, setData }) => {
  const createEmptyItem = () => {
    return Object.keys(item).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
  };

  const addItem = () => {
    setData((prevData) => {
      const newData = { ...prevData };
      const keys = currentPath.split(".");
      let currentSection = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        currentSection[keys[i]] = { ...currentSection[keys[i]] };
        currentSection = currentSection[keys[i]];
      }
      const lastKey = keys[keys.length - 1];
      currentSection[lastKey] = [
        ...(currentSection[lastKey] || []),
        createEmptyItem(),
      ];
      return newData;
    });
  };

  return (
    <Box sx={{ display: "flex", mb:3, mt:1 }}>
      {" "}
      <Button onClick={addItem} variant="contained">
        Add new block
      </Button>{" "}
    </Box>
  );
};

export default AddButton;
