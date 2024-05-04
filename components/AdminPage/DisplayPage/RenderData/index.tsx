import React from "react";
import { Box, Typography } from "@mui/material";
import TextArea from "../TextArea";
import DeleteButton from "../Buttons/DeleteButton";
import AddButton from "../Buttons/AddButton";
import { MainPageData } from "@interfaces";
import UploadMediaFile from "../Buttons/UploadMediaFile";
import { SnackbarSeverityType } from "../../../../types/admin";


interface RenderDataProps {
  data: MainPageData;
  setData: React.Dispatch<React.SetStateAction<MainPageData | null>>;
  setEmptyFields: React.Dispatch<React.SetStateAction<string[]>>;
  snackbarSeverity: SnackbarSeverityType;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const RenderData: React.FC<RenderDataProps> = ({
  data,
  setData,
  setEmptyFields,
  snackbarSeverity,
  setFormData,
}) => {
  const renderData = (dataToRender: MainPageData, currentPath = "") => {
    return (
      <>
        {Object.entries(dataToRender).map(([key, value], index) => {
          if (key === "_id" || key === "pageName") return null;
          const newPath = currentPath ? `${currentPath}.${key}` : key;
          const itemKey = `${newPath}-${index}`;

          if (key === "forAdmin")
            return (
              <Typography key={itemKey} variant="h6">
                {value}
              </Typography>
            );
          else if (key === "forAdminHeader")
            return (
              <Typography
                sx={{ textAlign: "center", mt: 2, fontStyle: "italic" }}
                key={itemKey}
                variant="h5"
              >
                {value}
              </Typography>
            );
          else if (key === "imgURL") {
            return (
              <UploadMediaFile
                type="image"
                path={`${currentPath}.${key}`}
                data={data}
                key={itemKey}
                onSetFormData={setFormData}
                snackbarSeverity={snackbarSeverity}
              />
            );
          } else if (key === "videoURL")
            return (
              <UploadMediaFile
                type="video"
                path={`${currentPath}.${key}`}
                data={data}
                key={itemKey}
                onSetFormData={setFormData}
                snackbarSeverity={snackbarSeverity}
              />
            );
          else if (typeof value === "string" && key !== "forAdmin") {
            return (
              <Box sx={{ mb: 2 }} key={key}>
                <TextArea
                  itemKey={itemKey}
                  initialValue={value}
                  mainKey={key}
                  setData={setData}
                  currentPath={currentPath}
                  onSetEmptyFields={setEmptyFields}
                />
              </Box>
            );
          } else if (Array.isArray(value)) {
            return (
              <React.Fragment key={itemKey}>
                {value.map((item, arrayIndex) => (
                  <React.Fragment key={`${newPath}-${arrayIndex}`}>
                    <Typography variant="h6">{`Блок-${
                      arrayIndex + 1
                    }`}</Typography>

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
      </>
    );
  };

  return renderData(data);
};

export default RenderData;
