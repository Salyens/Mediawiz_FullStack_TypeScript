import React from "react";
import TextArea from "../TextArea";
import UploadMediaFile from "../Buttons/UploadMediaFile";
import { useDisplayPageContext } from "@context/DisplayPageContext";
import LoadingCircle from "@components/LoadingCircle";
import { getSortedKeys } from "@utils/getSortedKeys";
import DataLocales from "./DataLocales";
import DataList from "./DataList";
import BlockHeader from "./BLockHeader";
import ListHeader from "./ListHeader";

const RenderData = () => {
  const { data } = useDisplayPageContext();

  const renderData = (dataToRender: Record<string, any>, currentPath = "") => {
    if (!data) return <LoadingCircle />;
    const sortedKeys = getSortedKeys(dataToRender);

    return (
      <div className="text-xl">
        {sortedKeys.map((key, index) => {
          const value = dataToRender[key];
          const newPath = currentPath ? `${currentPath}.${key}` : key;
          const itemKey = `${newPath}-${index}`;

          switch (key) {
            case "_id":
            case "pageName":
              return null;
            case "forAdmin":
              return <ListHeader value={value} key={itemKey} />;
            case "forAdminHeader":
              return <BlockHeader value={value} key={itemKey} />;
            case "imgURL":
            case "videoURL":
              return (
                <UploadMediaFile
                  type={key === "imgURL" ? "image" : "video"}
                  path={newPath}
                  key={itemKey}
                />
              );
            case "en":
            case "ru":
              return (
                <DataLocales
                  key={itemKey}
                  locale={key}
                  value={value}
                  newPath={newPath}
                  renderData={renderData}
                />
              );
            default:
              if (typeof value === "string") {
                return (
                  <TextArea
                    key={itemKey}
                    initialValue={value}
                    pathWithKey={newPath}
                  />
                );
              } else if (Array.isArray(value)) {
                return (
                  <DataList
                    value={value}
                    renderData={renderData}
                    newPath={newPath}
                    key={itemKey}
                  />
                );
              } else if (typeof value === "object" && value !== null) {
                return (
                  <React.Fragment key={itemKey}>
                    {renderData(value, newPath)}
                  </React.Fragment>
                );
              }
              return null;
          }
        })}
      </div>
    );
  };

  return renderData(data as Record<string, any>);
};

export default RenderData;
