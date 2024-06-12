import { locales } from "@navigation";

export type SupportedLocale = (typeof locales)[number];

export type LocalesType = "en" | "ru";
export type PageDataTypes = object | null;

export type InfoType = {
  name: string;
  phoneNumber: string;
  email: string;
  accepted: boolean;
  recaptchaToken?: string;
};


