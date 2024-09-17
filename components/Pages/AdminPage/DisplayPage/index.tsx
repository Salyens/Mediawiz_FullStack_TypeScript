"use client";
import React, { useEffect, useState } from "react";
import styles from "./displaydata.module.css";
import PageHeader from "./PageHeader";
import RenderData from "./RenderData";
import SaveButton from "./Buttons/SaveButton";
import SaveAlert from "./Buttons/SaveButton/SaveAlert";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPageData } from "@lib/features/adminPageDataSlice";
import { RootState } from "@lib/store";
import { AppDispatch } from "@lib/store";

interface DisplayPageProps {
  endPoint: string;
}

const DisplayPage = ({ endPoint }: DisplayPageProps) => {
  const [formData, setFormData] = useState<FormData>(
    new FormData()
  );
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(
    (state: RootState) => state.adminPageData.value
  );
  const error = useSelector(
    (state: RootState) => state.adminPageData.error
  );
  const saveResult = useSelector(
    (state: RootState) => state.adminPageData.saveResult
  );

  useEffect(() => {
    dispatch(getAdminPageData(endPoint));
  }, [dispatch, endPoint]);

  return (
    <div className={styles.container}>
      {error && (
        <p className="text-red-700 text-center">{error}</p>
      )}
      {data && (
        <>
          <PageHeader />
          <RenderData
            setFormData={setFormData}
          />
          <SaveButton
            formData={formData}
            setFormData={setFormData}
            endPoint={endPoint}
          />
          {saveResult && <SaveAlert />}
        </>
      )}
    </div>
  );
};

export default DisplayPage;
