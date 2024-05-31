"use client";

import SuccessAlert from "@components/modals/SuccessAlert";
import CommonForm from "../CommonForm";
import styles from "../feedbackform.module.css";
import { useState } from "react";
import classNames from "classnames";

const CustomForm = () => {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <div
        className={classNames(
          "flex min-h-[400px] min-w-80 w-full max-w-[500px] flex-1 flex-col justify-center p-6 lg:p-8 bg-black",
          styles.my_form
        )}
      >
        <CommonForm isModal={false} setSuccess={setSuccess} />
      </div>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
    </>
  );
};

export default CustomForm;
