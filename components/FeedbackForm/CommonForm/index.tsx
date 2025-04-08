"use client";

import React, { useState, FormEvent, useRef } from "react";
import LoadingCircle from "@components/LoadingCircle";
import validator from "validator";
import styles from "../feedbackform.module.css";
import { useTranslations } from "next-intl";
import InputList from "./InputList";
import Policy from "./Policy";
import classNames from "classnames";
import ApiService from "@services/ApiService";
import { InfoType } from "@customTypes/mainTypes";
import dynamic from "@node_modules/next/dynamic";
import Preloader from "@components/Preloader";
import ReCAPTCHA from "@node_modules/@types/react-google-recaptcha";

interface CommonFormProps {
  setIsOpen?: (isOpen: boolean) => void;
  isModal: boolean;
  setSuccess: (success: boolean) => void;
}

const DynamicRecaptcha = dynamic(
  () => import("./Recaptcha"),
  {
    ssr: false,
    loading: () => <Preloader />,
  }
);

const CommonForm: React.FC<CommonFormProps> = ({
  setIsOpen,
  isModal,
  setSuccess,
}) => {
  const t = useTranslations("MainForm");
  const [info, setInfo] = useState<InfoType>({
    name: "",
    phoneNumber: "",
    email: "",
    accepted: false,
    recaptchaToken: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setInfo({ ...info, recaptchaToken: token || "" });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!info.name || !info.phoneNumber || !info.email) {
      return setError(t("fillFields"));
    } else if (!validator.isEmail(info.email)) {
      return setError(t("errorEmail"));
    } else if (!info.accepted) {
      return setError(t("fillPolicy"));
    } else if (!info.recaptchaToken) {
      return setError("Please complete the reCAPTCHA");
    }
    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      return setError("Please verify the reCAPTCHA!");
    }

    setLoading(true);

    try {
      const res = await ApiService.createFeedback(info);
      setError("");
      setLoading(false);
      setSuccess(true);
      if (isModal && setIsOpen) setIsOpen(false);
      setInfo({
        name: "",
        phoneNumber: "",
        email: "",
        accepted: false,
        recaptchaToken: "",
      });
      if (recaptchaRef.current)
        recaptchaRef.current.reset();
      return res;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong";
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <form tabIndex={-1} onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <InputList info={info} setInfo={setInfo} />
      <Policy accepted={info.accepted} setInfo={setInfo} />
      <DynamicRecaptcha
        handleRecaptchaChange={handleRecaptchaChange}
        ref={recaptchaRef}
      />

      <button
        type="submit"
        className={classNames("mt-6", styles.btn)}
      >
        {loading ? (
          <div className="w-5">
            <LoadingCircle />
          </div>
        ) : (
          t("request_2")
        )}
      </button>
    </form>
  );
};

export default CommonForm;
