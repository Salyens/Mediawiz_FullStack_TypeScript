import WebPage from "@components/Pages/WebPage";
import { IWebPageData } from "@interfaces/webPage";
import { useLocale } from "next-intl";

export const metadata = {
  title: "WebDev page",
  description: "",
};

async function getData(): Promise<IWebPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/webPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: IWebPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export default async function Web() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <WebPage data={data.languages[localActive as SupportedLocale]} />;
  }

  return <p>Locale not supported</p>;
}
