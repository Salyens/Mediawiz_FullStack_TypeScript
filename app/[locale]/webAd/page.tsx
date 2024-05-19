import WebAdPage from "@components/Pages/WebAdPage";
import { IWebAdLanguageContent, IWebAdPageData } from "@interfaces/webPage";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Web Ad page",
  description: "",
};

async function getData(): Promise<IWebAdPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/webAdPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: IWebAdPageData = await res.json();
  return data;
}

export default async function WebAd() {
  const localActive = useLocale();
  const data = await getData();

  if (localActive === "en" || localActive === "ru")
    return <WebAdPage data={data.languages[localActive] as IWebAdLanguageContent} />;
}