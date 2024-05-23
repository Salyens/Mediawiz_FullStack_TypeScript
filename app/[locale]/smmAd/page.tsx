import SmmAdPage from "@components/Pages/SmmAdPage";
import SmmPage from "@components/Pages/SmmPage";
import { ISmmAdPageData } from "@interfaces/smmAd";
import { useLocale } from "next-intl";

export const metadata = {
  title: "SMM page",
  description: "",
};

async function getData(): Promise<ISmmAdPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/smmAdPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: ISmmAdPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = typeof supportedLocales[number];

export default async function SmmAd() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <SmmAdPage data={data.languages[localActive as SupportedLocale]} />;

  }

  return <p>Locale not supported</p>;
}
