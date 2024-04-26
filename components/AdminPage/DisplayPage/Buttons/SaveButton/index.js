import { Box, Button, CircularProgress, Tooltip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import _ from "lodash";
import styles from "./savebutton.module.css";
import axios from "axios";
import { useState } from "react";

const SaveButton = ({
  emptyFields,
  setSnackbarSeverity,
  setSnackbarMessage,
  formData,
  data,
  setData,
  setSnackbarOpen,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);
  const isDisabled = Boolean(emptyFields.length);
  const buttonContent = isDisabled
    ? "Please fill in all required fields"
    : "Save";

  const handleSaveData = async () => {
    setLoading(true);
    setSnackbarSeverity("");
    const formDataToSend = new FormData();

    for (let pair of formData.entries()) {
      formDataToSend.append(pair[0], pair[1]);
    }
    formDataToSend.append("jsonData", JSON.stringify(data));
    try {
      const result = await axios.patch("/api/mainPage", formDataToSend);
      const { updates } = result.data;

      if (updates && updates.length) {
        const newData = _.cloneDeep(data);
        updates.forEach((update) => {
          _.set(newData, update.filePath, update.newUrl);
        });
        setData(newData);
      }

      setSnackbarMessage("Data successfully saved");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setLoading(false);
      setFormData(new FormData());
    } catch (error) {
        console.log('error: ', error);
      setSnackbarMessage("Something went wrong");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setLoading(false);
    }
  };

  return (
    <Box className={styles.save_btn}>
      <Tooltip title={buttonContent}>
        <span>
          <Button
            sx={{ width: 250 }}
            disabled={isDisabled}
            variant="contained"
            onClick={handleSaveData}
            startIcon={<SaveIcon />}
            style={{ backgroundColor: isDisabled ? "#ff9999" : "" }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Save"}
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};

export default SaveButton;
