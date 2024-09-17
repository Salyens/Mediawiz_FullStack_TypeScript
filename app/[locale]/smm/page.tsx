import SmmPage from "@components/Pages/SmmPage";
import { ISmmPageData } from "@interfaces/smmPage";
import type { Metadata } from "next";
import enMetaInfo from "../../../messages/en.json";
import ruMetaInfo from "../../../messages/ru.json";
import { LocalesType } from "@customTypes/mainTypes";
import ApiService from "@services/ApiService";
import { PageLocaleProps } from "@interfaces/common";
import { locales } from "@navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocalesType };
}): Promise<Metadata> {
  const { locale } = params;
  const metaInfo =
    locale === "en"
      ? enMetaInfo["MetaSmmPage"]
      : ruMetaInfo["MetaSmmPage"];

  return {
    title: metaInfo.title,
    description: metaInfo.description,
    keywords: metaInfo.keywords,
  };
}
export default async function Smm({
  params,
}: PageLocaleProps) {
  const { locale } = params;
  const data = await ApiService.getPageData("/smmPage");

  if (locales.includes(locale)) {
    return <SmmPage data={data.languages[locale]} />;
  }

  return <p className="mt-12">Locale not supported</p>;
}
