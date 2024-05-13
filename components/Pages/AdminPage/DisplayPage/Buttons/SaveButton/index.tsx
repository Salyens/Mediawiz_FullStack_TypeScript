import _ from "lodash";
import styles from "./savebutton.module.css";
import axios from "axios";
import { useState } from "react";
import { MainPageData } from "@interfaces";
import LoadingCircle from "@components/LoadingCircle";
import Tooltip from "./SaveTooltip";
import { useTranslations } from "next-intl";
type SaveAlertProps = "error" | "saved" | "";

interface SaveButtonProps {
  emptyFields: string[];
  formData: FormData;
  data: MainPageData | null;
  setData: React.Dispatch<React.SetStateAction<MainPageData | null>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setSaveStatus: React.Dispatch<React.SetStateAction<SaveAlertProps>>;
}

interface IUpdatesFile {
  filePath: string;
  newUrl: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  emptyFields,
  formData,
  data,
  setData,
  setFormData,
  setSaveStatus,
}) => {
  const [loading, setLoading] = useState(false);
  const isDisabled = Boolean(emptyFields.length);
  const buttonContent = isDisabled
    ? "Please fill in all required fields"
    : null;
  const t = useTranslations("AdminEditPage");

  const handleSaveData = async () => {
    setLoading(true);
    const formDataToSend = new FormData();

    for (let pair of formData.entries()) {
      formDataToSend.append(pair[0], pair[1]);
    }
    formDataToSend.append("jsonData", JSON.stringify(data));
    try {
      const result = await axios.patch("/api/mainPage", formDataToSend);
      const { updates }: { updates: IUpdatesFile[] } = result.data;

      if (data && updates && updates.length) {
        const newData = _.cloneDeep(data);
        updates.forEach((update) => {
          _.set(newData, update.filePath, update.newUrl);
        });
        setData(newData);
      }
      setFormData(new FormData());
      setSaveStatus("saved");
    } catch (error) {
      setSaveStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.save_btn}>
      <Tooltip content={buttonContent}>
        <span>
          <button
            style={{ backgroundColor: isDisabled ? "#ff9999" : "" }}
            disabled={isDisabled}
            onClick={handleSaveData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm w-56"
          >
            {loading ? (
              <div className="w-5 h-5 ml-auto mr-auto">
                <LoadingCircle />
              </div>
            ) : (
              "SAVE"
            )}
          </button>
        </span>
      </Tooltip>
    </div>
  );
};

export default SaveButton;
