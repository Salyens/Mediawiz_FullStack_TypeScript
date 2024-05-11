import MainPage from "@components/MainPage";
import { LanguageContent, MainPageData } from "../../interfaces";

type HomePageProps = {
  params: { locale: "en" | "ru" };
};

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

export default async function Home({ params: { locale } }: HomePageProps) {
  const data = await getData();

  return <MainPage data={data.languages[locale] as LanguageContent}/>
}
