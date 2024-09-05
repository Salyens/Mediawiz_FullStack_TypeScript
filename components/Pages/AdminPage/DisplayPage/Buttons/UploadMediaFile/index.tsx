import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import MotionDivImg from "./MotionDivImg";
import styles from "../../../DisplayPage/displaydata.module.css";
import RenderMediaFiles from "./RenderMediaFiles";
import UploadInput from "./UploadInput";
import { MainPageData } from "@interfaces/mainPage";
import DisplayNewFile from "./DisplayNewFile";
import { SaveAlertType } from "@myTypes/adminTypes";

interface UploadMediaFileProps {
  type: "image" | "video";
  path: string;
  data: MainPageData;
  onSetFormData: React.Dispatch<React.SetStateAction<FormData>>;
  saveStatus: SaveAlertType;
}

const UploadMediaFile: React.FC<UploadMediaFileProps> = ({
  type,
  path,
  data,
  onSetFormData,
  saveStatus,
}) => {
  const lodashPath = path.replace(/\[(\d+)\]/g, ".$1");
  const [fileURL, setFileURL] = useState<string>(_.get(data, lodashPath));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previews, setPreviews] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviews(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  useEffect(() => {
    if (saveStatus === "saved") {
      setPreviews(null);
      setFile(null);
    }
  }, [saveStatus]);

  useEffect(() => {
    setFileURL(_.get(data, lodashPath));
  }, [data]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.text_area}>
      <div className="flex items-center gap-2">
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
            <DisplayNewFile
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
      </div>
    </div>
  );
};

export default UploadMediaFile;
