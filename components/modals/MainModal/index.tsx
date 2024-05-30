"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from ".//mainmodal.module.css";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import CommonForm from "@components/FeedbackForm/CommonForm";
import { useState } from "react";
import SuccessAlert from "../SuccessAlert";

const MainModal = () => {
  const t = useTranslations("MainForm");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild onClick={() => setIsOpen(true)}>
          <button
            className={classNames("w-80 m-auto mt-6 sm:m-0", styles.btn_apply)}
          >
            {t("request_2")}
          </button>
        </DialogTrigger>
        <DialogContent
          className={classNames(
            "top-1/3 sm:top-1/2 flex min-w-80 w-full max-w-[500px] flex-1 flex-col justify-center lg:px-8 bg-black",
            styles.my_form
          )}
        >
          <CommonForm
            setIsOpen={setIsOpen}
            isModal={true}
            setSuccess={setSuccess}
          />
        </DialogContent>
      </Dialog>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
    </>
  );
};

export default MainModal;
