"use client";

import React, { useState, FormEvent } from "react";
import LoadingCircle from "@components/LoadingCircle";
import axios from "axios";
import validator from "validator";
import styles from "../feedbackform.module.css";
import { useTranslations } from "next-intl";
import InputList from "./InputList";
import Policy from "./Policy";
import classNames from "classnames";

interface CommonFormProps {
  setIsOpen?: (isOpen: boolean) => void;
  isModal: boolean;
  setSuccess: (success: boolean) => void;
}

type InfoType = {
  name: string;
  phoneNumber: string;
  email: string;
  accepted: boolean;
};

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
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!info.name || !info.phoneNumber || !info.email) {
      return setError(t("fillFields"));
    } else if (!validator.isEmail(info.email)) {
      return setError(t("errorEmail"));
    } else if (!info.accepted) return setError(t("fillPolicy"));
    setLoading(true);

    try {
      const res = await axios.post("/api/feedback", info);
      setError("");
      setLoading(false);
      setSuccess(true);
      if (isModal && setIsOpen) setIsOpen(false);
      setInfo({ name: "", phoneNumber: "", email: "", accepted: false });
      return res;
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <InputList info={info} setInfo={setInfo} />
        <Policy accepted={info.accepted} setInfo={setInfo} />

        <button type="submit" className={classNames("mt-6", styles.btn)}>
          {loading ? (
            <div className="w-5">
              <LoadingCircle />
            </div>
          ) : (
            t("request_2")
          )}
        </button>
      </form>
    </>
  );
};

export default CommonForm;
