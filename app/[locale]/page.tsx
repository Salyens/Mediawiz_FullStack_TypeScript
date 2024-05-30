import MainPage from "@components/Pages/MainPage";
import { MainPageData } from "../../interfaces/mainPage";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const localActive = useLocale();

  return {
    title: localActive === "en" ? "Home Page" : "Главная страница",
    description:
      localActive === "en"
        ? "We create unique strategies for your business."
        : "Мы создаем уникальные стратегии для вашего бизнеса.",
    keywords:
      localActive === "en"
        ? "website development, SMM, social media marketing, contextual advertising, digital marketing, business strategy, online presence, SEO, targeted advertising"
        : "разработка сайтов, SMM, маркетинг в соцсетях, контекстная реклама, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, таргетированная реклама",
  };
}

async function getData(): Promise<MainPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/mainPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: MainPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export default async function Home() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <MainPage data={data.languages[localActive as SupportedLocale]} />;
  }

  return <p>Locale not supported</p>;
}
