import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import styles from "./successalert.module.css";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface SuccessAlertProps {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ success, setSuccess }) => {
  console.log("success: ", success);
  const t = useTranslations("SuccessForm");
  const [visible, setVisible] = useState(true);
  const alertInfo = {
    title: !success ? t("error") : t("success"),
    description: !success ? t("request_error") : t("request_ok"),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div
      className={classNames(
        styles.alert_container,
        visible ? "opacity-100" : "opacity-0 transition-opacity duration-1000"
      )}
    >
      <Alert
        className={styles.alert_wrapper}
        variant={!success ? "destructive" : "default"}
      >
        <AlertTitle>{alertInfo.title}</AlertTitle>
        <AlertDescription>{alertInfo.description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SuccessAlert;
