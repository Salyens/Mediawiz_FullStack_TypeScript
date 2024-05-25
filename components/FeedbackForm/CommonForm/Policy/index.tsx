import { useTranslations } from "next-intl";

interface PolicyProps {
  accepted: boolean;
  setInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phoneNumber: string;
      email: string;
      accepted: boolean;
    }>
  >;
}

const Policy: React.FC<PolicyProps> = ({ accepted, setInfo }) => {
  const t = useTranslations("MainForm");

  return (
    <div className="flex mt-3 mb-3 md:mt-6 md:mb-6">
      <div className="flex items-center p-2">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={accepted}
          onChange={(e) =>
            setInfo((prev) => ({
              ...prev,
              accepted: !prev.accepted,
            }))
          }
          className="w-4 h-4 text-blue-900 bg-black border-gray-300 border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <p className="text-xs">
        {t("policy_1")}
        <span className="font-bold"> {t("policy_2")}</span> {t("policy_3")}
      </p>
    </div>
  );
};

export default Policy;
