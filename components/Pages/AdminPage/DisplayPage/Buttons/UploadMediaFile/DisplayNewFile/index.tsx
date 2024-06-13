import { useDisplayPageContext } from "@context/DisplayPageContext";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";

interface DisplayPrevFileProps {
  file: File | null;
  type: "image" | "video";
  previews: string | null;
  setPreviews: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  lodashPath: string;
}

const DisplayNewFile: React.FC<DisplayPrevFileProps> = ({
  file,
  type,
  previews,
  setPreviews,
  setFile,
  fileInputRef,
  lodashPath,
}) => {
  const { setFormData } = useDisplayPageContext();
  const removeFileFromFormData = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFormData((prevFormData) => {
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
    <div className="relative flex flex-col items-start ml-3 text-xs">
      <p className="absolute top-1 left-5 z-10">{`Chosen file: "${file?.name}"`}</p>

      <TrashIcon
        className="w-6 h-6 absolute top-1 right-1 z-20 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125"
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
          src={previews || "/admin/placeholderIMG.png"}
        />
      ) : (
        <button className="cursor-pointer ">
          <video
            style={{
              width: 150,
              height: 150,
              border: "1px solid blue",
              cursor: "pointer",
            }}
            src={previews || "/admin/placeholderIMG.png"}
            autoPlay
            muted
            loop
          />
        </button>
      )}
    </div>
  );
};

export default DisplayNewFile;
