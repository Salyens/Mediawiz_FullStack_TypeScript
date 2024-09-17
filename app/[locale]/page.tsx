import MainPage from "@components/Pages/MainPage";
import { MainPageData } from "../../interfaces/mainPage";
import { PageLocaleProps } from "@interfaces/common";
import ApiService from "@services/ApiService";
import { locales } from "@navigation";
import { Metadata } from "next";
import enMetaInfo from "../../messages/en.json";
import ruMetaInfo from "../../messages/ru.json";
import { LocalesType } from "@customTypes/mainTypes";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocalesType };
}): Promise<Metadata> {
  const { locale } = params;
  const metaInfo =
    locale === "en"
      ? enMetaInfo["MetaHomePage"]
      : ruMetaInfo["MetaHomePage"];

  return {
    title: metaInfo.title,
    description: metaInfo.description,
    keywords: metaInfo.keywords,
  };
}
export default async function Home({
  params,
}: PageLocaleProps) {
  const { locale } = params;
  const data = await ApiService.getPageData<MainPageData>(
    "mainPage"
  );

  if (locales.includes(locale)) {
    return <MainPage data={data.languages[locale]} />;
  }

  return <p className="mt-12">Locale not supported</p>;
}
