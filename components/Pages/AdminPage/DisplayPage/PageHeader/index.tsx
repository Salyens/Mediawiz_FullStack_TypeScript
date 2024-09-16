import { RootState } from "@lib/store";
import { useLocale, useTranslations } from "next-intl";
import { useSelector } from "react-redux";

const PageHeader = () => {
  const data = useSelector((state:RootState) => state.adminPageData.value)
  const localActive = useLocale();
  const t = useTranslations("AdminEditPage");
  const pageName =
    localActive === "en" || localActive === "ru"
      ? data?.languages[localActive]?.pageName
      : "";
  return <h2 className="text-center text-3xl">Editing page "{pageName}"</h2>;
};

export default PageHeader;
