import React, { useEffect, useState, useCallback } from "react";
import { TextareaAutosize } from "@mui/material";
import styles from "../displaydata.module.css";
import _ from "lodash";
import { debounce } from "lodash";

const TextArea = ({
  itemKey,
  initialValue,
  mainKey,
  setData,
  currentPath,
  onSetEmptyFields,
}) => {
  const [value, setValue] = useState(initialValue);
  const fullPath = `${currentPath}.${mainKey}`;

  const updateEmptyFields = useCallback(
    (isEmpty) => {
      onSetEmptyFields((prevEmptyFields) => {
        if (isEmpty) {
          return [...prevEmptyFields, fullPath];
        }

        return prevEmptyFields.filter((path) => path !== fullPath);
      });
    },
    [fullPath, onSetEmptyFields]
  );

  const debouncedUpdate = useCallback(
    debounce((newValue) => {
      updateEmptyFields(newValue === "");
    }, 200),
    []
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    debouncedUpdate(newValue);
  };

  const handleBlur = () => {
    if (value !== "") {
      setData((prevData) => {
        _.set(prevData, fullPath, value);
        return { ...prevData };
      });
    } else {
      updateEmptyFields(true);
    }
  };

  useEffect(() => {
    if (initialValue === "") {
      onSetEmptyFields((prevEmptyFields) => [...prevEmptyFields, fullPath]);
    }
    return () => {
      debouncedUpdate.cancel();
    };
  }, [initialValue, debouncedUpdate, fullPath, onSetEmptyFields]);

  return (
    <div key={itemKey} className={styles.container}>
      <TextareaAutosize
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
