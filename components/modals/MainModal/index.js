import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import validator from "validator";
import styles from "../modal.module.css";

const MainModal = ({ open, handleClose, onSetStatus }) => {
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: null,
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fields = [
    { label: "Имя", key: "name" },
    { label: "Телефон", key: "phoneNumber", type: "number" },
    { label: "Email", key: "email" },
  ];

  const handleChange = (key, value) => {
    setInfo((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!info.name || !info.phoneNumber || !info.email) {
      return setError("All fields are required");
    }

    if (!validator.isEmail(info.email)) {
      return setError("Invalid email format");
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/feedback", info);
      onSetStatus(true);
      setError("");
      setLoading(false);
      return res;
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    setError("");
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={styles.modal}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 1,
          }}
        >
          Заказать обратный звонок
        </Typography>
        {error && (
          <Typography sx={{ color: "error.main", mb: 1, p: 1 }}>
            {error}
          </Typography>
        )}
        {fields.map((field) => (
          <TextField
            key={field.key}
            onChange={(e) => handleChange(field.key, e.target.value)}
            id={`outlined-${field.key}`}
            label={field.label}
            variant="outlined"
            type={field.type || "text"}
            sx={{ marginBottom: 2 }}
          />
        ))}

        <button onClick={() => handleSubmit(info)}>
          {loading ? <CircularProgress size={24} /> : "Отправить"}
        </button>
      </Box>
    </Modal>
  );
};

export default MainModal;
