import WebPage from "@components/Pages/WebPage";
import { IWebPageData } from "@interfaces/webPage";
import type { Metadata } from "next";
import { Locales } from "@interfaces/common";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locales };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: locale === "en" ? "Website Development" : "Разработка сайта",
    description:
      locale === "en"
        ? "Our professional task is to develop a website, which is an important element of your online presence."
        : "Наша профессиональная задача - разработка сайта, который является важным элементом вашего присутствия в интернете.",
    keywords:
      locale === "en"
        ? "website development, SMM, social media marketing, contextual advertising, digital marketing, business strategy, online presence, SEO, turnkey solutions, corporate sites, online stores, business card sites, catalog sites, landing pages"
        : "разработка сайтов, SMM, маркетинг в соцсетях, контекстная реклама, цифровой маркетинг, бизнес-стратегия, онлайн-присутствие, SEO, решения под ключ, корпоративные сайты, интернет-магазины, сайты-визитки, сайты-каталоги, посадочные страницы",
  };
}

async function getData(): Promise<IWebPageData> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/webPage`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: IWebPageData = await res.json();
  return data;
}

const supportedLocales = ["en", "ru"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

interface WebProps {
  params: { locale: SupportedLocale };
}

export default async function Web({ params }: WebProps) {
  const { locale } = params;
  const data = await getData();

  if (supportedLocales.includes(locale)) {
    return <WebPage data={data.languages[locale]} />;
  }

  return <p>Locale not supported</p>;
}
