import WebPage from "@components/Pages/WebPage";
import { PageLocaleProps } from "@interfaces/common";
import { IWebPageData } from "@interfaces/webPage";
import { locales } from "@navigation";
import ApiService from "@services/ApiService";
import type { Metadata } from "next";
import enMetaInfo from "@messages/en.json";
import ruMetaInfo from "@messages/ru.json";
import { LocalesType } from "@/types/mainTypes";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocalesType };
}): Promise<Metadata> {
  const { locale } = params;
  const metaInfo =
    locale === "en"
      ? enMetaInfo["MetaWebPage"]
      : ruMetaInfo["MetaWebPage"];

  return {
    title: metaInfo.title,
    description: metaInfo.description,
    keywords: metaInfo.keywords,
  };
}

export default async function Web({
  params,
}: PageLocaleProps) {
  const { locale } = params;
  const data = await ApiService.getPageData<IWebPageData>(
    "webPage"
  );

  if (locales.includes(locale)) {
    return <WebPage data={data.languages[locale]} />;
  }

  return <p className="mt-12">Locale not supported</p>;
}
