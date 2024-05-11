import { useTranslations } from "next-intl";

interface UploadFileButtonProps {
  handleButtonClick: () => void;
  type: "image" | "video";
}

const UploadFileButton: React.FC<UploadFileButtonProps> = ({
  handleButtonClick,
  type,
}) => {
  const t = useTranslations("AdminEditPage")
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
      >
        {t("uploadBtn")}
      </button>
      <span className="sm:text-xs">
        {type === "image" ? "Max size 5 MB" : "Max size 30 MB"}
      </span>
    </div>
  );
};

export default UploadFileButton;
