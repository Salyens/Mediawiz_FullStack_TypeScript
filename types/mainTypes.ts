import { locales } from "@/navigation";

export type SupportedLocale = (typeof locales)[number];

export type LocalesType = "en" | "ru";

export type InfoType = {
  name: string;
  phoneNumber: string;
  email: string;
  accepted: boolean;
  recaptchaToken?: string;
};
