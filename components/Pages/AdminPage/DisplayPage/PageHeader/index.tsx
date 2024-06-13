import { useDisplayPageContext } from "@context/DisplayPageContext";
import { LocalesType } from "@myTypes/mainTypes";
import { useLocale } from "next-intl";

const PageHeader = () => {
  const { data } = useDisplayPageContext();
  const localActive = useLocale();

  const pageName = data?.languages[localActive as LocalesType]?.pageName;
  return <h2 className="text-center text-3xl">Editing page "{pageName}"</h2>;
};

export default PageHeader;
