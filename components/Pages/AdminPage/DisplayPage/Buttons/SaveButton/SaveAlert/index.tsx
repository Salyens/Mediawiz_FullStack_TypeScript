import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import styles from "./savealert.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "@lib/store";

const SaveAlert = () => {
  const saveError = useSelector(
    (state: RootState) => state.adminPageData.saveError
  );
  const saveResult = useSelector(
    (state: RootState) => state.adminPageData.saveResult
  );
  const [visible, setVisible] = useState(true);

  const alertInfo = {
    title: saveResult,
    description: saveError
      ? "Something went wrong"
      : "Data successfully saved",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Alert
      className={classNames(
        styles.alert_container,
        visible
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-1000",
        saveError ? "border-red-500" : "border-green-500"
      )}
      variant={saveError ? "destructive" : "default"}
    >
      <AlertTitle
        className={classNames(
          "font-bold text-xl",
          saveError ? "text-red-500" : "text-green-700"
        )}
      >
        {alertInfo.title}
      </AlertTitle>
      <AlertDescription className="text-lg text-black">
        {alertInfo.description}
      </AlertDescription>
    </Alert>
  );
};

export default SaveAlert;
