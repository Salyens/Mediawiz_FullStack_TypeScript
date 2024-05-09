import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import styles from "./successalert.module.css";

interface SuccessAlertProps {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ success, setSuccess }) => {
  const [visible, setVisible] = useState(true);
  const alertInfo = {
    title: !success ? "Ошибка" : "Выполнено",
    description: !success
      ? "Что-то пошло не так"
      : "Ваша заявка успешно принята",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setSuccess(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div
      className={`${styles.alert_container} ${
        visible ? "opacity-100" : "opacity-0 transition-opacity duration-1000"
      }`}
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
