"use client";
import { useEffect } from "react";
import axios from "axios";
import styles from "./displaydata.module.css";
import PageHeader from "./PageHeader";
import RenderData from "./RenderData";
import SaveButton from "./Buttons/SaveButton";
import SaveAlert from "./Buttons/SaveButton/SaveAlert";
import { useDisplayPageContext } from "@context/DisplayPageContext";
import { IEndpoint } from "@interfaces/common";

const DisplayPage = ({ endPoint }: IEndpoint) => {
  const { data, setData, saveStatus, error, setError } =
    useDisplayPageContext();

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
          <PageHeader />
          <RenderData />
          <SaveButton endPoint={endPoint} />
          {saveStatus && <SaveAlert />}
        </>
      )}
    </div>
  );
};

export default DisplayPage;
