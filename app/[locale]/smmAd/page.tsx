import SmmAdPage from "@components/Pages/SmmAdPage";
import { ISmmAdPageData } from "@interfaces/smmAd";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const localActive = useLocale();

  return {
    title: localActive === "en" ? "Targeted Advertising" : "Таргетированная реклама",
    description: localActive === "en"
      ? "In the modern world, SMM is not limited to just social media content. Targeted advertising is the key to attracting the right audience and increasing sales."
      : "В современном мире SMM не ограничивается только контентом в социальных сетях. Таргетированная реклама — это ключ к привлечению правильной аудитории и увеличению продаж.",
    keywords: localActive === "en"
      ? "website development, SMM, social media marketing, contextual advertising, digital marketing, business strategy, online presence, SEO, targeted advertising"
      : "разработка сайтов, SMM, маркетинг в соцсетях, контекстная реклама, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, таргетированная реклама",
  };
}
async function getData(): Promise<ISmmAdPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/smmAdPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: ISmmAdPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = typeof supportedLocales[number];

export default async function SmmAd() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <SmmAdPage data={data.languages[localActive as SupportedLocale]} />;

  }

  return <p>Locale not supported</p>;
}
