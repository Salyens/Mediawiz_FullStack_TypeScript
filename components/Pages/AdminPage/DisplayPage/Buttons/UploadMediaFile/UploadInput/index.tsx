import React, { ChangeEvent } from "react";
import UploadFileButton from "./UploadFileButton";
import { useDisplayPageContext } from "@context/DisplayPageContext";

interface UploadInputProps {
  type: "image" | "video";
  handleButtonClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setPreviews: React.Dispatch<React.SetStateAction<string | null>>;
  lodashPath: string;
}

const UploadInput: React.FC<UploadInputProps> = ({
  type,
  handleButtonClick,
  fileInputRef,
  setFile,
  setPreviews,
  lodashPath,
}) => {
  const { setFormData } = useDisplayPageContext();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const maxSize = type === "image" ? 5 * 1024 * 1024 : 30 * 1024 * 1024;
      if (file.size > maxSize) {
        setFile(null);
        setPreviews(null);
        alert(
          `File size exceeds the limit (${type === "image" ? "5MB" : "30MB"}).`
        );
        return;
      }
      setFile(file);
      setFormData((prevFormData) => {
        const updatedFormData = new FormData();
        prevFormData.forEach((value, key) => {
          if (value instanceof File) {
            updatedFormData.append(key, value, value.name);
          } else {
            updatedFormData.append(key, value);
          }
        });
        updatedFormData.append("files", file, lodashPath);
        return updatedFormData;
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <input
        type="file"
        accept={type === "image" ? "image/*" : "video/*"}
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <UploadFileButton handleButtonClick={handleButtonClick} type={type} />
    </>
  );
};

export default UploadInput;
