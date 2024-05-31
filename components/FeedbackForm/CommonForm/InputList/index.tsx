import { useTranslations } from "next-intl";
import styles from "./inputlist.module.css";

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
    { name: "phoneNumber", type: "number" },
    { name: "email", type: "email" },
  ];

  return fields.map((field) => (
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
  ));
};

export default InputList;
