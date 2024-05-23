"use client";

import React, { useState, FormEvent } from "react";
import LoadingCircle from "@components/LoadingCircle";
import axios from "axios";
import validator from "validator";
import styles from "../feedbackform.module.css";
import { useTranslations } from "next-intl";

interface CommonFormProps {
  setIsOpen?: (isOpen: boolean) => void;
  isModal: boolean;
  setSuccess: (success: boolean) => void; 
}

const CommonForm: React.FC<CommonFormProps> = ({ setIsOpen, isModal, setSuccess }) => {
  const t = useTranslations("MainForm");
  const [info, setInfo] = useState({
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
        <div className="mt-2 w-full">
          <input
            id="name"
            value={info.name}
            name="name"
            type="text"
            placeholder={t("name")}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            className={styles.input_email}
          />
        </div>

        <div className="mt-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            value={info.phoneNumber}
            placeholder={t("phone")}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            required
            className={styles.input_email}
          />
        </div>

        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            value={info.email}
            placeholder="E-Mail"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            autoComplete="email"
            required
            className={styles.input_email}
          />
        </div>
        <div className="flex">
          <div className="flex items-center p-2">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={info.accepted}
              onChange={(e) =>
                setInfo((prev) => ({
                  ...prev,
                  accepted: !prev.accepted,
                }))
              }
              className="w-4 h-4 text-blue-900 bg-black border-gray-300 border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <p>
            {t("policy_1")}
            <span className="font-bold"> {t("policy_2")}</span> {t("policy_3")}
          </p>
        </div>

        <div>
          <button type="submit" className={styles.btn}>
            {loading ? (
              <div className="w-5">
                <LoadingCircle />
              </div>
            ) : (
              t("request_2")
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CommonForm;
