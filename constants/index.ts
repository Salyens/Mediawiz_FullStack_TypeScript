import { IPages, socialLink } from "@interfaces/common";

export const socialLinks: socialLink[] = [
  {
    name: "Facebook",
    shortName: "FB",
    href: "https://www.facebook.com/profile.php?id=61560343121600&mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    shortName: "IG",
    href: "https://www.instagram.com/mediawiz_marketing",
  },
  {
    name: "WhatsApp",
    shortName: "WA",
    href: "https://wa.me/message/VK65WBLSQRUBL1",
  },
];

export const pages: IPages[] = [
  { pageName: "HOME PAGE", endPoint: "mainPage" },
  { pageName: "WEB DEVELOPMENT", endPoint: "webPage" },
  { pageName: "WEBSITE PROMOTION", endPoint: "webAdPage" },
  { pageName: "SMM", endPoint: "smmPage" },
  { pageName: "SMM PROMOTION", endPoint: "smmAdPage" },
];
