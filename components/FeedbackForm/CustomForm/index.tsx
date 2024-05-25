"use client";

import SuccessAlert from "@components/modals/SuccessAlert";
import CommonForm from "../CommonForm";
import styles from "../feedbackform.module.css";
import { useState } from "react";


const CustomForm = () => {
  const [success, setSuccess] = useState<boolean>(false); 

  return (
    <div className="w-full">
      <div
        className={`flex min-h-[400px] min-w-80 w-full flex-1 flex-col justify-center px-6  lg:px-8 bg-black ${styles.my_form}`}
      >
        <CommonForm isModal={false} setSuccess={setSuccess} />
      </div>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />} 
    </div>
  );
};

export default CustomForm;
