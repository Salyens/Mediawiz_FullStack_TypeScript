import Image from "next/image";
import { useState, useEffect } from "react";

interface RenderMediaFilesProps {
  fileURL: string;
  type: 'image' | 'video';
  handleButtonClick: () => void;
}

const RenderMediaFiles: React.FC<RenderMediaFilesProps> = ({ fileURL, type, handleButtonClick }) => {
  const [src, setSrc] = useState(fileURL);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setSrc(fileURL);
    setHasError(false);
  }, [fileURL]);

  const handleError = () => {
    setSrc('/placeholderIMG.png');
    setHasError(true);
  };

  const handleLoad = () => {
    if (hasError) {
      setHasError(false);
    }
  };

  if (!fileURL) return null;

  if (type === "video") {
    return (
      <video
        key={fileURL}
        style={{
          width: 150,
          height: 150,
          border: "1px solid blue",
          marginLeft: 30,
          cursor: "pointer",
        }}
        src={fileURL}
        autoPlay
        muted
        loop
        onClick={handleButtonClick}
      />
    );
  } else if (type === "image") {
    return (
      <Image
        key={src}
        style={{
          marginLeft: 30,
          border: "1px solid blue",
          cursor: "pointer",
        }}
        width={150}
        height={150}
        src={src}
        alt="Uploaded file"
        priority={true}
        onClick={handleButtonClick}
        onError={handleError}
        onLoad={handleLoad}
      />
    );
  }

  return null;
};

export default RenderMediaFiles;
