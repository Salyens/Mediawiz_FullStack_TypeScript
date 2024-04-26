import React, { useEffect, useRef, useState } from "react";
import { Box,} from "@mui/material";
import _ from "lodash";
import MotionDivImg from "./MotionDivImg";
import styles from "../../../DisplayPage/displaydata.module.css";
import DisplayPrevFile from "./DisplayPrevFile";
import RenderMediaFiles from "./RenderMediaFiles";
import UploadInput from "./UploadInput";

const UploadMediaFile = ({
  type,
  path,
  data,
  onSetFormData,
  snackbarSeverity,
}) => {
  const lodashPath = path.replace(/\[(\d+)\]/g, ".$1");
  const [fileURL, setFileURL] = useState(_.get(data, lodashPath));
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [previews, setPreviews] = useState(null);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviews(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  useEffect(() => {
    if (snackbarSeverity === "success") {
      setPreviews(null);
      setFile(null);
    }
  }, [snackbarSeverity]);

  useEffect(() => {
    setFileURL(_.get(data, lodashPath));
  }, [data]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box className={styles.text_area}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <UploadInput
          type={type}
          handleButtonClick={handleButtonClick}
          fileInputRef={fileInputRef}
          setFile={setFile}
          setPreviews={setPreviews}
          onSetFormData={onSetFormData}
          lodashPath={lodashPath}
        />

        <MotionDivImg isVisible={!!previews}>
          {previews && (
            <DisplayPrevFile
              file={file}
              type={type}
              previews={previews}
              onSetFormData={onSetFormData}
              setPreviews={setPreviews}
              setFile={setFile}
              fileInputRef={fileInputRef}
              lodashPath={lodashPath}
            />
          )}
        </MotionDivImg>

        <RenderMediaFiles
          fileURL={fileURL}
          type={type}
          handleButtonClick={handleButtonClick}
        />
      </Box>
    </Box>
  );
};

export default UploadMediaFile;
