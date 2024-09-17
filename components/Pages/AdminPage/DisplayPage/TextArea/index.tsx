import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import styles from "../displaydata.module.css";
import _ from "lodash";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { textAreaBlock } from "@lib/features/adminPageDataSlice";
import { updateEmptyFields } from "@lib/features/adminFormSlice";

interface TextAreaProps {
  itemKey: string;
  initialValue: string;
  mainKey: string;
  currentPath: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  itemKey,
  initialValue,
  mainKey,
  currentPath,
}) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();
  const fullPath = `${currentPath}.${mainKey}`;

  const debouncedUpdate = useCallback(
    debounce((newValue) => {
      dispatch(
        updateEmptyFields({
          isEmpty: newValue === "",
          fullPath,
        })
      );
    }, 200),
    []
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;

    setValue(newValue);
    debouncedUpdate(newValue);
  };

  const handleBlur = () => {
    if (value !== "") {
      dispatch(textAreaBlock({ path: fullPath, value }));
    } else {
      updateEmptyFields({ isEmpty: true, fullPath })
    }
  };

  useEffect(() => {
    if (initialValue === "") {
      dispatch(
        updateEmptyFields({ isEmpty: true, fullPath })
      );
    }
    return () => {
      debouncedUpdate.cancel();
    };
  }, [initialValue, debouncedUpdate, fullPath]);

  return (
    <div key={itemKey} className={styles.container}>
      <textarea
        className={
          value === ""
            ? `${styles.text_area} ${styles.error}`
            : styles.text_area
        }
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={
          value === "" ? "This field cannot be empty" : ""
        }
      />
    </div>
  );
};

export default TextArea;
