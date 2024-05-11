
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MyPages = () => {
  const localActive = useLocale();
  const t = useTranslations("Navigation");
  const pages = [
    { pageName: t("home"), endPoint: "mainPage" },
    { pageName: t("web"), endPoint: "webPage" },
    { pageName: t("webAd"), endPoint: "webAdPage" },
    { pageName: t("smm"), endPoint: "smm" },
    { pageName: t("smmAd"), endPoint: "smmAds" },
  ];

  return (
    <>
      <h2 className="text-center text-2xl mt-2 mb-2">{t("myClients")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {pages.map((page, index) => (
          <Link
            key={page.endPoint}
            href={`/${localActive}/admin/pages/${page.endPoint}`}
            passHref
          >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded min-h-32 w-full">
              {page.pageName}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MyPages;
