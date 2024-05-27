import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import styles from "./savealert.module.css";
import classNames from "classnames";

interface SaveAlertProps {
  saveStatus: "error" | "saved" | "";
  setSaveStatus: React.Dispatch<React.SetStateAction<"error" | "saved" | "">>;
}

const SaveAlert: React.FC<SaveAlertProps> = ({ saveStatus, setSaveStatus }) => {
  const [visible, setVisible] = useState(true);
  const isErrorResponse = saveStatus === "error";
  const alertInfo = {
    title: isErrorResponse ? "Error" : "Success",
    description: isErrorResponse
      ? "Something went wrong"
      : "Data successfully saved",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setSaveStatus("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [saveStatus]);

  return (
    <div
      className={classNames(
        styles.alert_container,
        visible ? "opacity-100" : "opacity-0 transition-opacity duration-1000"
      )}
    >
      <Alert variant={isErrorResponse ? "destructive" : "default"}>
        <AlertTitle>{alertInfo.title}</AlertTitle>
        <AlertDescription>{alertInfo.description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SaveAlert;
