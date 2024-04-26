import React from "react";
import UploadFileButton from "./UploadFileButton";

const UploadInput = ({
  type,
  handleButtonClick,
  fileInputRef,
  setFile,
  setPreviews,
  onSetFormData,
  lodashPath,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = type === "image" ? 5 * 1024 * 1024 : 40 * 1024 * 1024;
      if (file.size > maxSize) {
        setFile(null);
        setPreviews(null);
        alert(
          `File size exceeds the limit (${type === "image" ? "5MB" : "30MB"}).`
        );
        return;
      }
      setFile(file);
      onSetFormData((prevFormData) => {
        const updatedFormData = new FormData();
        for (let item of prevFormData) {
          updatedFormData.append("files", item[1], item[1].name);
        }
        updatedFormData.append("files", file, lodashPath);
        return updatedFormData;
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(reader.result);
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
