import Image from "next/image";

interface RenderMediaFilesProps {
  fileURL: string;
  type: 'image' | 'video';
  handleButtonClick: () => void;
}

const RenderMediaFiles: React.FC<RenderMediaFilesProps> = ({ fileURL, type, handleButtonClick }) => {
  if (!fileURL) return null;
  else if (type === "video")
    return (
      <>
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
      </>
    );
  else if (type === "image")
    return (
      <Image
        key={fileURL}
        style={{
          marginLeft: 30,
          border: "1px solid blue",
          cursor: "pointer",
        }}
        width={150}
        height={150}
        src={fileURL}
        alt="Uploaded file"
        priority={true}
        onClick={handleButtonClick}
      />
    );
};

export default RenderMediaFiles;
