import React from "react";
import TextArea from "../TextArea";
import DeleteButton from "../Buttons/DeleteButton";
import UploadMediaFile from "../Buttons/UploadMediaFile";
import AddButton from "../Buttons/AddButton";
import styles from "../displaydata.module.css";
import { useDisplayPageContext } from "@context/DisplayPageContext";
import LoadingCircle from "@components/LoadingCircle";

const RenderData = () => {
  const { data } = useDisplayPageContext();

  const renderData = (dataToRender: any, currentPath = "") => {
    const sortedKeys = Object.keys(dataToRender).sort((a, b) => {
      if (a === "en" && b === "ru") return -1;
      if (a === "ru" && b === "en") return 1;
      return 0;
    });

    if (!data) return <LoadingCircle />;

    return (
      <div className="text-xl">
        {sortedKeys.map((key, index) => {
          const value = dataToRender[key];
          if (key === "_id" || key === "pageName") return null;

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
                path={`${currentPath}.${key}`}
                key={itemKey}
              />
            );
          } else if (key === "videoURL")
            return (
              <UploadMediaFile
                type="video"
                path={`${currentPath}.${key}`}
                key={itemKey}
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
                  currentPath={currentPath}
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
                          item={item}
                        />
                      </>
                    ) : (
                      <p>{item}</p>
                    )}
                  </React.Fragment>
                ))}
                <AddButton currentPath={newPath} item={value[0] || {}} />
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
