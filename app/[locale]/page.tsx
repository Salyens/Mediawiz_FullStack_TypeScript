import MainPage from "@components/Pages/MainPage";
import { MainPageData } from "../../interfaces/mainPage";
import type { Metadata } from "next";
import { Locales } from "@interfaces/common";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locales };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: locale === "en" ? "Home Page" : "Главная страница",
    description:
      locale === "en"
        ? "We create unique strategies for your business."
        : "Мы создаем уникальные стратегии для вашего бизнеса.",
    keywords:
      locale === "en"
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

interface HomeProps {
  params: { locale: SupportedLocale };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = params;
  const data = await getData();

  if (supportedLocales.includes(locale)) {
    return <MainPage data={data.languages[locale]} />;
  }

  return <p>Locale not supported</p>;
}
