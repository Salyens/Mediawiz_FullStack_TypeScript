import React from "react";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./inputlist.module.css";
import classNames from "classnames";

type InfoType = {
  name: string;
  phoneNumber: string;
  email: string;
  accepted: boolean;
};

interface InputListProps {
  info: InfoType;
  setInfo: React.Dispatch<React.SetStateAction<InfoType>>;
}

const InputList: React.FC<InputListProps> = ({ info, setInfo }) => {
  const t = useTranslations("MainForm");
  const fields: { name: keyof Omit<InfoType, "accepted">; type: string }[] = [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
  ];

  return (
    <div>
      {fields.map((field) => (
        <input
          key={field.name}
          id={field.name}
          value={info[field.name]}
          name={field.name}
          type={field.type}
          placeholder={t(field.name)}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, [field.name]: e.target.value }))
          }
          required
          className={styles.input}
        />
      ))}
      <div className={styles.input}>
        <div className={styles.phone_container}>
          <PhoneInput
            country={"ge"}
            value={info.phoneNumber}
            onChange={(phone) =>
              setInfo((prev) => ({ ...prev, phoneNumber: phone }))
            }
            inputClass={styles.phone_input}
            dropdownClass={styles.phone_dropdown}
            buttonClass={styles.button_search}
            inputProps={{
              name: "phoneNumber",
              required: true,
            }}
            containerClass={styles.phone_container}
          />
        </div>
      </div>
    </div>
  );
};

export default InputList;
