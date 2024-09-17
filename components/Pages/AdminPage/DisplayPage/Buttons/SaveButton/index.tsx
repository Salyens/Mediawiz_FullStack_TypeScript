import _ from "lodash";
import LoadingCircle from "@components/LoadingCircle";
import Tooltip from "./SaveTooltip";
import styles from "./savebutton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@lib/store";
import { saveAdminPageData } from "@lib/features/adminPageDataSlice";

interface SaveButtonProps {
  formData: FormData;
  setFormData: React.Dispatch<
    React.SetStateAction<FormData>
  >;
  endPoint: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  formData,
  setFormData,
  endPoint,
}) => {
  const isLoading = useSelector(
    (state: RootState) => state.adminPageData.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();
  const emptyFields = useSelector((state:RootState) => state.adminForm.emptyFields)
  const isDisabled = Boolean(emptyFields.length);
  const buttonContent = isDisabled
    ? "Please fill in all required fields"
    : null;

  const handleSaveData = async () => {
    try {
      await dispatch(
        saveAdminPageData({ endPoint, formData })
      );
      setFormData(new FormData());
    } catch (_) {}
  };

  return (
    <div className={styles.save_btn}>
      <Tooltip content={buttonContent}>
        <span>
          <button
            style={{
              backgroundColor: isDisabled ? "#ff9999" : "",
            }}
            disabled={isDisabled}
            onClick={handleSaveData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm w-56"
          >
            {isLoading ? (
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
