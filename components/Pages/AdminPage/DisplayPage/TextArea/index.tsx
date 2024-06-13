import React, { useEffect, useState, useCallback } from "react";
import styles from "../displaydata.module.css";
import _ from "lodash";
import { debounce } from "lodash";
import { useDisplayPageContext } from "@context/DisplayPageContext";

interface TextAreaProps {
  initialValue: string;
  pathWithKey: string;
}

const TextArea: React.FC<TextAreaProps> = ({ initialValue, pathWithKey }) => {
  const { setData, setEmptyFields } = useDisplayPageContext();
  const [value, setValue] = useState(initialValue);

  const updateEmptyFields = useCallback(
    (isEmpty: boolean) => {
      setEmptyFields((prevEmptyFields) => {
        if (isEmpty) {
          return [...prevEmptyFields, pathWithKey];
        }

        return prevEmptyFields.filter((path) => path !== pathWithKey);
      });
    },
    [pathWithKey, setEmptyFields]
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
        _.set(newData, pathWithKey, value);
        return newData;
      });
    } else {
      updateEmptyFields(true);
    }
  };

  useEffect(() => {
    if (initialValue === "") {
      setEmptyFields((prevEmptyFields) => [...prevEmptyFields, pathWithKey]);
    }
    return () => {
      debouncedUpdate.cancel();
    };
  }, [initialValue, debouncedUpdate, pathWithKey, setEmptyFields]);

  return (
    <div className="mb-2">
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
