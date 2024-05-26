import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { roboto } from "@app/[locale]/layout";
import { useTranslations } from "next-intl";

interface SocialIcon {
  name: string;
  shortName: string;
  href: string;
}

const Footer = () => {
  const t = useTranslations("Footer");
  const socialIcons: SocialIcon[] = [
    // { name: "Facebook", src: "/FB" },
    {
      name: "Instagram",
      shortName: "IG",
      href: "https://www.instagram.com/mediawiz_marketing",
    },
    { name: "WhatsApp", shortName: "WA", href: "https://wa.me/89033750261" },
  ];

  const renderSocialLinks = () => {
    return socialIcons.map((item) => (
      <Link
        href={item.href}
        key={item.name + item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-base, flex sm:justify-center items-center sm:mr-1">
          <Image
            src={`/social_icons/${item.shortName}.png`}
            width={40}
            height={40}
            alt={item.name}
          />
          {item.name}
        </span>
      </Link>
    ));
  };

  return (
    <div
      className={`${styles.footer_wrapper} ${roboto.className} pt-10 pb-10 gap-4 `}
    >
      <div className="flex gap-2">{renderSocialLinks()}</div>
      <Link href="tel:+79033750261">8-903-375-02-61</Link>
      <div className="font-bold">{t("policy")}</div>
    </div>
  );
};

export default Footer;
