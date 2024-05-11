import MainPage from "@components/MainPage";
import { LanguageContent, MainPageData } from "../../interfaces";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Home page",
  description: "",
};

async function getData(): Promise<MainPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/mainPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: MainPageData = await res.json();
  return data;
}

export default async function Home() {
  const localActive = useLocale();
  const data = await getData();

  if (localActive === "en" || localActive === "ru")
    return <MainPage data={data.languages[localActive] as LanguageContent} />;
}
