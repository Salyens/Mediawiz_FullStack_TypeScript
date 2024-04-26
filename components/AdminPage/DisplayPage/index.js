"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./displaydata.module.css";
import DataRenderer from "./RenderData";
import PageHeader from "./PageHeader";
import SaveButton from "./Buttons/SaveButton";
import SaveSnackbar from "./Buttons/SaveButton/Snackbar";

const DisplayPage = ({ endPoint }) => {
  const [data, setData] = useState({});
  const [emptyFields, setEmptyFields] = useState([]);
  const [formData, setFormData] = useState(new FormData());
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/${endPoint}`);
        console.log('response: ', response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [endPoint]);


  return (
    <div className={styles.container}>
      <PageHeader data={data} />
      <DataRenderer
        data={data}
        setData={setData}
        setEmptyFields={setEmptyFields}
        snackbarSeverity={snackbarSeverity}
        setFormData={setFormData}
      />
      <SaveButton
        emptyFields={emptyFields}
        formData={formData}
        setFormData={setFormData}
        data={data}
        setData={setData}
        setSnackbarOpen={setSnackbarOpen}
        setSnackbarSeverity={setSnackbarSeverity}
        setSnackbarMessage={setSnackbarMessage}
      />
      <SaveSnackbar
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarSeverity={snackbarSeverity}
        snackbarMessage={snackbarMessage}
      />
    </div>
  );
};

export default DisplayPage;
