import WebAdPage from "@components/Pages/WebAdPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import type { Metadata } from "next";
import enMetaInfo from "@messages/en.json";
import ruMetaInfo from "@messages/ru.json";
import ApiService from "@services/ApiService";
import { PageLocaleProps } from "@interfaces/common";
import { locales } from "@navigation";
import { LocalesType } from "@/types/mainTypes";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocalesType };
}): Promise<Metadata> {
  const { locale } = params;
  const metaInfo =
    locale === "en"
      ? enMetaInfo["MetaWebAdPage"]
      : ruMetaInfo["MetaWebAdPage"];

  return {
    title: metaInfo.title,
    description: metaInfo.description,
    keywords: metaInfo.keywords,
  };
}

export default async function WebAd({
  params,
}: PageLocaleProps) {
  const { locale } = params;
  const data = await ApiService.getPageData<IWebAdPageData>(
    "webAdPage"
  );

  if (locales.includes(locale)) {
    return <WebAdPage data={data.languages[locale]} />;
  }

  return <p className="mt-12">Locale not supported</p>;
}
