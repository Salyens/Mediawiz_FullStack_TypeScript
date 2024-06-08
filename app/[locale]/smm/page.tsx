import SmmPage from "@components/Pages/SmmPage";
import { ISmmPageData } from "@interfaces/smmPage";
import type { Metadata } from "next";
import { Locales } from "@interfaces/common";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locales };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title:
      locale === "en" ? "Social Media Management" : "Ведение социальных сетей",
    description:
      locale === "en"
        ? "In SMM, our clients receive not only promotion but also a comprehensive approach. Marketing strategy, competitor and audience analysis are included for you as a bonus, absolutely free!"
        : "В SMM наши клиенты получают не только продвижение, но и комплексный подход. Маркетинговая стратегия, анализ конкурентов и целевой аудитории идут вам бонусом, совершенно бесплатно!",
    keywords:
      locale === "en"
        ? "website development, SMM, social media marketing, contextual advertising, digital marketing, business strategy, online presence, SEO, targeted advertising"
        : "разработка сайтов, SMM, маркетинг в соцсетях, контекстная реклама, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, таргетированная реклама",
  };
}

async function getData(): Promise<ISmmPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/smmPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: ISmmPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

interface SmmProps {
  params: { locale: SupportedLocale };
}

export default async function Smm({ params }: SmmProps) {
  const { locale } = params;
  const data = await getData();

  if (supportedLocales.includes(locale)) {
    return <SmmPage data={data.languages[locale]} />;
  }

  return <p>Locale not supported</p>;
}
