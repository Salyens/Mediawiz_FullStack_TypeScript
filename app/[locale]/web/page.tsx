import WebPage from "@components/Pages/WebPage";
import { IWebLanguageContent, IWebPageData } from "@interfaces/webPage";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Home page",
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

export default async function Web() {
  const localActive = useLocale();
  const data = await getData();

  if (localActive === "en" || localActive === "ru")
    return <WebPage data={data.languages[localActive] as IWebLanguageContent} />;
}
