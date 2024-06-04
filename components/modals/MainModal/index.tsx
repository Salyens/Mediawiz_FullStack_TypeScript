"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./mainmodal.module.css";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import CommonForm from "@components/FeedbackForm/CommonForm";
import { useState } from "react";
import SuccessAlert from "../SuccessAlert";

const MainModal = () => {
  const t = useTranslations("MainForm");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleButtonClick = () => {
    setTimeout(() => {
      document.body.style.pointerEvents = "";
      setIsOpen(true);
    }, 0);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild >
          <button
            onClick={handleButtonClick}
            className={classNames("w-80 mt-10 text-center flex justify-center", styles.btn_apply)}
          >
            {t("request_2")}
          </button>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay />
          <DialogContent
            className={classNames(styles.my_form)}
          >
            <CommonForm
              setIsOpen={setIsOpen}
              isModal={true}
              setSuccess={setSuccess}
            />
            <DialogClose />
          </DialogContent>
        </DialogPortal>
      </Dialog>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
    </>
  );
};

export default MainModal;
