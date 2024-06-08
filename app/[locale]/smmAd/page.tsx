import SmmAdPage from "@components/Pages/SmmAdPage";
import { ISmmAdPageData } from "@interfaces/smmAd";
import type { Metadata } from "next";
import { Locales } from "@interfaces/common";

export async function generateMetadata({ params }: { params: { locale: Locales } }): Promise<Metadata> {
  const { locale } = params;
  return {
    title: locale === "en" ? "Targeted Advertising" : "Таргетированная реклама",
    description: locale === "en"
      ? "In the modern world, SMM is not limited to just social media content. Targeted advertising is the key to attracting the right audience and increasing sales."
      : "В современном мире SMM не ограничивается только контентом в социальных сетях. Таргетированная реклама — это ключ к привлечению правильной аудитории и увеличению продаж.",
    keywords: locale === "en"
      ? "website development, SMM, social media marketing, contextual advertising, digital marketing, business strategy, online presence, SEO, targeted advertising"
      : "разработка сайтов, SMM, маркетинг в соцсетях, контекстная реклама, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, таргетированная реклама",
  };
}

async function getData(): Promise<ISmmAdPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/smmAdPage`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: ISmmAdPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

interface SmmAdProps {
  params: { locale: SupportedLocale };
}

export default async function SmmAd({ params }: SmmAdProps) {
  const { locale } = params;
  const data = await getData();

  if (supportedLocales.includes(locale)) {
    return <SmmAdPage data={data.languages[locale]} />;
  }

  return <p>Locale not supported</p>;
}
