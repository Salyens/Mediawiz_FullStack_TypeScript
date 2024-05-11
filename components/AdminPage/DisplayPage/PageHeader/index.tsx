import { MainPageData } from "@interfaces";
import { useLocale, useTranslations } from "next-intl";

interface PageHeaderProps {
  data: MainPageData;
}

const PageHeader = ({ data }: PageHeaderProps) => {
  const localActive = useLocale();
  const t = useTranslations("AdminEditPage");
  const pageName =
    localActive === "en" || localActive === "ru"
      ? data.languages[localActive]?.pageName
      : "";
  return (
    <h2 className="text-center text-3xl">
      {t("Editing")} "{pageName}"
    </h2>
  );
};

export default PageHeader;
