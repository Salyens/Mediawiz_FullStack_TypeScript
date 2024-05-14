import React from "react";
import TextArea from "../TextArea";
import DeleteButton from "../Buttons/DeleteButton";
import { MainPageData } from "@interfaces";
import UploadMediaFile from "../Buttons/UploadMediaFile";
import AddButton from "../Buttons/AddButton";
import { SaveAlertProps } from "../../../../../types/admin";
import styles from "../displaydata.module.css";

interface RenderDataProps {
  data: MainPageData;
  setData: React.Dispatch<React.SetStateAction<MainPageData | null>>;
  setEmptyFields: React.Dispatch<React.SetStateAction<string[]>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  saveStatus: SaveAlertProps;
}

const RenderData: React.FC<RenderDataProps> = ({
  data,
  setData,
  setEmptyFields,
  setFormData,
  saveStatus,
}) => {
  const renderData = (dataToRender: any, currentPath = "") => {
    const sortedKeys = Object.keys(dataToRender).sort((a, b) => {
      if (a === "en" && b === "ru") return -1;
      if (a === "ru" && b === "en") return 1;
      return 0;
    });
    return (
      <div className="text-xl">
        {sortedKeys.map((key, index) => {
          const value = dataToRender[key];
          if (key === "_id" || key === "pageName" || key === "href")
            return null;

          const newPath = currentPath ? `${currentPath}.${key}` : key;
          const itemKey = `${newPath}-${index}`;

          if (key === "forAdmin") return <h6 key={itemKey}>{value}</h6>;
          else if (key === "forAdminHeader")
            return (
              <h5 className="text-center mt-2" key={itemKey}>
                {value}
              </h5>
            );
          else if (key === "imgURL") {
            return (
              <UploadMediaFile
                type="image"
                saveStatus={saveStatus}
                path={`${currentPath}.${key}`}
                data={data}
                key={itemKey}
                onSetFormData={setFormData}
              />
            );
          } else if (key === "videoURL")
            return (
              <UploadMediaFile
                type="video"
                saveStatus={saveStatus}
                path={`${currentPath}.${key}`}
                data={data}
                key={itemKey}
                onSetFormData={setFormData}
              />
            );
          else if (key === "en" || key === "ru") {
            return (
              <div key={key}>
                <h3 className="text-center m-3 font-bold">
                  {key === "en" ? "English" : "Russian"}
                </h3>
                <div className={styles.lang_style} key={itemKey}>
                  {renderData(value, newPath)}
                </div>
              </div>
            );
          } else if (typeof value === "string" && key !== "forAdmin") {
            return (
              <div className="mb-2" key={key}>
                <TextArea
                  itemKey={itemKey}
                  initialValue={value}
                  mainKey={key}
                  setData={setData}
                  currentPath={currentPath}
                  onSetEmptyFields={setEmptyFields}
                />
              </div>
            );
          } else if (Array.isArray(value)) {
            return (
              <React.Fragment key={itemKey}>
                {value.map((item, arrayIndex) => (
                  <React.Fragment key={`${newPath}-${arrayIndex}`}>
                    <h6>{`№${arrayIndex + 1}`}</h6>

                    {typeof item === "object" ? (
                      <>
                        {renderData(item, `${newPath}[${arrayIndex}]`)}
                        <DeleteButton
                          currentPath={`${newPath}[${arrayIndex}]`}
                          setData={setData}
                          onSetEmptyFields={setEmptyFields}
                          item={item}
                        />
                      </>
                    ) : (
                      <p>{item}</p>
                    )}
                  </React.Fragment>
                ))}
                <AddButton
                  currentPath={newPath}
                  item={value[0] || {}}
                  setData={setData}
                />
              </React.Fragment>
            );
          } else if (typeof value === "object" && value !== null) {
            return (
              <React.Fragment key={itemKey}>
                {renderData(value, newPath)}
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return renderData(data);
};

export default RenderData;
