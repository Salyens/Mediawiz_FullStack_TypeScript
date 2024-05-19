import Image from "next/image";

interface DisplayPrevFileProps {
  file: File | null;
  type: "image" | "video";
  previews: string | null;
  onSetFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setPreviews: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  lodashPath: string;
}

const DisplayNewFile: React.FC<DisplayPrevFileProps> = ({
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
      <p className="absolute top-1 left-1 z-10">{`Chosen file: "${file?.name}"`}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-1 right-1 z-20 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125"
        onClick={removeFileFromFormData}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>

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
