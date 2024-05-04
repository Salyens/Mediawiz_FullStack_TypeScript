import { Box, Button, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Image from "next/image";

interface DisplayPrevFileProps {
  file: File | null;
  type: 'image' | 'video';
  previews: string | null;
  onSetFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setPreviews: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  lodashPath: string;
}

const DisplayPrevFile: React.FC<DisplayPrevFileProps> = ({
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
    onSetFormData(prevFormData => {
      const newFormData = new FormData();
      prevFormData.forEach((value, key) => {

        if (!(value instanceof File && key === lodashPath)) {
          newFormData.append(key, value);
        }
      });
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
          src={previews || "/file_placeholder.jpg"}
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
            src={previews || "/file_placeholder.jpg"}
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
