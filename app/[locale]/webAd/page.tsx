import WebAdPage from "@components/Pages/WebAdPage";
import { Locales } from "@interfaces/common";
import { IWebAdPageData } from "@interfaces/webAdPage";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locales };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: locale === "en" ? "Web Ad" : "Контекстная реклама сайтов",
    description:
      locale === "en"
        ? "We create advertising campaigns that are not just noticeable but attract your specific audience."
        : "Мы занимаемся созданием таких рекламных компаний, которые не просто заметны, но и привлекают именно вашу аудиторию.",
    keywords:
      locale === "en"
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

interface WebAdProps {
  params: { locale: SupportedLocale };
}

export default async function WebAd({ params }: WebAdProps) {
  const { locale } = params;
  const data = await getData();

  if (supportedLocales.includes(locale)) {
    return <WebAdPage data={data.languages[locale]} />;
  }

  return <p>Locale not supported</p>;
}
