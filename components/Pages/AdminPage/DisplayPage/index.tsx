"use client";
import { useEffect } from "react";
import styles from "./displaydata.module.css";
import PageHeader from "./PageHeader";
import RenderData from "./RenderData";
import SaveButton from "./Buttons/SaveButton";
import SaveAlert from "./Buttons/SaveButton/SaveAlert";
import { useDisplayPageContext } from "@context/DisplayPageContext";
import ApiService from "@services/ApiService";
import { IRenderData } from "@interfaces/admin";
import { Endpoints } from "@myTypes/mainTypes";

const DisplayPage = ({ endPoint }: { endPoint: Endpoints }) => {
  const { data, setData, saveStatus, error, setError } =
    useDisplayPageContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await ApiService.getPageData<IRenderData>(endPoint);
        setData(fetchedData);
      } catch (err) {
        setError("Something went wrong");
      }
    };

    fetchData();
  }, [endPoint, setData, setError]);

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
