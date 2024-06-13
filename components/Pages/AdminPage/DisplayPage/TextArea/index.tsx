import React, { useEffect, useState, useCallback } from "react";
import styles from "../displaydata.module.css";
import _ from "lodash";
import { debounce } from "lodash";
import { useDisplayPageContext } from "@context/DisplayPageContext";

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
  const { setData, setEmptyFields } = useDisplayPageContext();
  const [value, setValue] = useState(initialValue);
  const fullPath = `${currentPath}.${mainKey}`;

  const updateEmptyFields = useCallback(
    (isEmpty: boolean) => {
      setEmptyFields((prevEmptyFields) => {
        if (isEmpty) {
          return [...prevEmptyFields, fullPath];
        }

        return prevEmptyFields.filter((path) => path !== fullPath);
      });
    },
    [fullPath, setEmptyFields]
  );

  const debouncedUpdate = useCallback(
    debounce((newValue) => {
      updateEmptyFields(newValue === "");
    }, 200),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
    debouncedUpdate(newValue);
  };

  const handleBlur = () => {
    if (value !== "") {
      setData((prevData) => {
        if (prevData === null) {
          return null;
        }
        const newData = _.cloneDeep(prevData);
        _.set(newData, fullPath, value);
        return newData;
      });
    } else {
      updateEmptyFields(true);
    }
  };

  useEffect(() => {
    if (initialValue === "") {
      setEmptyFields((prevEmptyFields) => [...prevEmptyFields, fullPath]);
    }
    return () => {
      debouncedUpdate.cancel();
    };
  }, [initialValue, debouncedUpdate, fullPath, setEmptyFields]);

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
        placeholder={value === "" ? "This field cannot be empty" : ""}
      />
    </div>
  );
};

export default TextArea;
