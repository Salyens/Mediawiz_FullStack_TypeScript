import WebPage from "@components/Pages/WebPage";
import { IWebPageData } from "@interfaces/webPage";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const localActive = useLocale();

  return {
    title: localActive === "en" ? "Website Development" : "Разработка сайта",
    description:
      localActive === "en"
        ? "Our professional task is to develop a website, which is an important element of your online presence."
        : "Наша профессиональная задача - разработка сайта, который является важным элементом вашего присутствия в интернете.",
    keywords:
      localActive === "en"
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

export default async function Web() {
  const localActive = useLocale();
  const data = await getData();

  if (supportedLocales.includes(localActive as SupportedLocale)) {
    return <WebPage data={data.languages[localActive as SupportedLocale]} />;
  }

  return <p>Locale not supported</p>;
}
