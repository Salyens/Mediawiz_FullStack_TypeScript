import WebAdPage from "@components/Pages/WebAdPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const localActive = useLocale();

  return {
    title: localActive === "en" ? "Web Ad" : "Контекстная реклама сайтов",
    description:
      localActive === "en"
        ? "We create advertising campaigns that are not just noticeable but attract your specific audience."
        : "Мы занимаемся созданием таких рекламных компаний, которые не просто заметны, но и привлекают именно вашу аудиторию.",
    keywords:
      localActive === "en"
        ? "contextual advertising, website promotion, digital marketing, business strategy, online presence, SEO, targeted advertising, affordable prices, website audit, competitor analysis"
        : "контекстная реклама, продвижение сайтов, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, таргетированная реклама, доступные цены, аудит сайта, анализ конкурентов",
  };
}

async function getData(): Promise<IWebAdPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/webAdPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: IWebAdPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export default async function WebAd() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <WebAdPage data={data.languages[localActive as SupportedLocale]} />;
  }

  return <p>Locale not supported</p>;
}
