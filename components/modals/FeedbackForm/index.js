'use client'
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
  
  const MainForm = ({ open, handleClose, onSetStatus }) => {
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
    // useEffect(() => {
    //   setError("");
    // }, [open]);
  
    return (
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box
    //       className={styles.modal}
    //       sx={{ display: "flex", flexDirection: "column" }}
    //     >
    //       <Typography
    //         variant="h6"
    //         sx={{
    //           p: 1,
    //         }}
    //       >
    //         Заказать обратный звонок
    //       </Typography>
    //       {error && (
    //         <Typography sx={{ color: "error.main", mb: 1, p: 1 }}>
    //           {error}
    //         </Typography>
    //       )}
    //       {fields.map((field) => (
    //         <TextField
    //           key={field.key}
    //           onChange={(e) => handleChange(field.key, e.target.value)}
    //           id={`outlined-${field.key}`}
    //           label={field.label}
    //           variant="outlined"
    //           type={field.type || "text"}
    //           sx={{ marginBottom: 2 }}
    //         />
    //       ))}
  
    //       <button onClick={() => handleSubmit(info)}>
    //         {loading ? <CircularProgress size={24} /> : "Отправить"}
    //       </button>
    //     </Box>
    //   </Modal>

    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
    );
  };
  
  export default MainForm;
  