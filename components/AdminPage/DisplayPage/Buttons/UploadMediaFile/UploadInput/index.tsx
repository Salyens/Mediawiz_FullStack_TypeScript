import React, { ChangeEvent } from "react";
import UploadFileButton from "./UploadFileButton";

interface UploadInputProps {
  type: 'image' | 'video';
  handleButtonClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setPreviews: React.Dispatch<React.SetStateAction<string | null>>;
  onSetFormData: React.Dispatch<React.SetStateAction<FormData>>;
  lodashPath: string;
}

const UploadInput: React.FC<UploadInputProps> = ({
  type,
  handleButtonClick,
  fileInputRef,
  setFile,
  setPreviews,
  onSetFormData,
  lodashPath,
}) => {
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
      const updatedFormData = new FormData();
      updatedFormData.append("files", file, lodashPath);
      onSetFormData(updatedFormData);
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
