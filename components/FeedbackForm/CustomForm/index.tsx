"use client";

import React, { useState, FormEvent } from "react";
import LoadingCircle from "@components/LoadingCircle";
import axios from "axios";
import validator from "validator";
import styles from "../feedbackform.module.css";

const CustomForm = () => {
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!info.name || !info.phoneNumber || !info.email) {
      return setError("All fields are required");
    } else if (!validator.isEmail(info.email)) {
      return setError("Invalid email format");
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/feedback", info);
      setError("");
      setLoading(false);
      setSuccess(true);
      setInfo({ name: "", phoneNumber: "", email: "" });
      return res;
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex min-h-[400px] min-w-80 w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black ${styles.my_form}`}
    >
      <div className="mt-2">
        <form onSubmit={handleSubmit} className="">
          <div>{error && <p className="text-red-500">{error}</p>}</div>

          <div className="mt-2 w-full">
            <input
              id="name"
              value={info.name}
              name="name"
              type="text"
              placeholder="Имя"
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
              placeholder="Телефон"
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

          <div>
            <button
              type="submit"
              className={styles.btn}
            >
              {loading ? (
                <div className="w-5">
                  <LoadingCircle />
                </div>
              ) : (
                "Оставить заявку"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomForm;
