"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./displaydata.module.css";
import { MainPageData } from "@interfaces";
import PageHeader from "./PageHeader";
import RenderData from "./RenderData";
import SaveButton from "./Buttons/SaveButton";
import SaveAlert from "./Buttons/SaveButton/SaveAlert";
import { SaveAlertProps } from "../../../types/admin";

interface DisplayPageProps {
  endPoint: string;
}

const DisplayPage = ({ endPoint }: DisplayPageProps) => {
  const [data, setData] = useState<MainPageData | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [saveStatus, setSaveStatus] = useState<SaveAlertProps>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/${endPoint}`);
        setData(response.data);
      } catch (error) {
        setError("Something went wrong");
      }
    };

    fetchData();
  }, [endPoint]);

  return (
    <div className={styles.container}>
      {error && <p className="text-red-700 text-center">{error}</p>}
      {data && (
        <>
          <PageHeader data={data}/>
          <RenderData
            data={data}
            setData={setData}
            saveStatus={saveStatus}
            setEmptyFields={setEmptyFields}
            setFormData={setFormData}
          />
          <SaveButton
            emptyFields={emptyFields}
            formData={formData}
            setFormData={setFormData}
            data={data}
            setData={setData}
            setSaveStatus={setSaveStatus}
          />
          {saveStatus && (
            <SaveAlert saveStatus={saveStatus} setSaveStatus={setSaveStatus} />
          )}
        </>
      )}
    </div>
  );
};

export default DisplayPage;
