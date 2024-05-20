import SmmPage from "@components/Pages/SmmPage";
import { ISmmPageData } from "@interfaces/smmPage";
import { useLocale } from "next-intl";

export const metadata = {
  title: "SMM page",
  description: "",
};

async function getData(): Promise<ISmmPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/smmPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: ISmmPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = typeof supportedLocales[number];

export default async function Web() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <SmmPage data={data.languages[localActive as SupportedLocale]} />;
  }

  return <p>Locale not supported</p>;
}
