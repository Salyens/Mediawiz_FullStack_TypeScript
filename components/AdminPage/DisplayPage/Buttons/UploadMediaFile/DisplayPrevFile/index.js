import { Box, Button, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Image from "next/image";

const DisplayPrevFile = ({
  file,
  type,
  previews,
  onSetFormData,
  setPreviews,
  setFile,
  fileInputRef,
  lodashPath,
}) => {
  const removeFileFromFormData = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onSetFormData((prevFormData) => {
      const newFormData = new FormData();
      for (let item of prevFormData) {
        if (item[1].name !== lodashPath) {
          newFormData.append("files", item[1], item[1].name);
        }
      }

      return newFormData;
    });
    setPreviews(null);
    setFile(null);
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        ml: 3,
      }}
    >
      <Typography
        sx={{ position: "absolute", top: 5, left: 5, fontWeight: 700 }}
        variant="caption"
        color="initial"
      >
        {`Chosen file: "${file?.name}"`}
      </Typography>
      <HighlightOffIcon
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 10,
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        onClick={removeFileFromFormData}
      />
      {type === "image" ? (
        <Image
          style={{
            border: "1px solid blue",
            zIndex: 5,
            cursor: "pointer",
          }}
          width={150}
          height={150}
          alt="Preview"
          src={previews}
        />
      ) : (
        <Button onClick={() => console.log("ssss")} sx={{ cursor: "pointer" }}>
          <video
            style={{
              width: 150,
              height: 150,
              border: "1px solid blue",
              cursor: "pointer",
            }}
            src={previews}
            autoPlay
            muted
            loop
          />
        </Button>
      )}
    </Box>
  );
};

export default DisplayPrevFile;
