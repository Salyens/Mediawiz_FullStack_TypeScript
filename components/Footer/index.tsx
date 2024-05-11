import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { roboto } from "@app/[locale]/layout";

interface SocialIcon {
  name: string;
  src: string;
}

const Footer = () => {
  const socialIcons: SocialIcon[] = [
    { name: "Telegram", src: "/TG" },
    { name: "VKontakte", src: "/VK" },
    { name: "Instagram", src: "/IG" },
    { name: "Facebook", src: "/FB" },
  ];

  const renderSocialLinks = () => {
    return socialIcons.map((item) => (
      <Link href="#" key={item.name + item.src}>
        <span className="text-base, flex sm:justify-center items-center sm:mr-1">
          <Image
            src={`/social_icons${item.src}.png`}
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
      className={`${styles.footer_wrapper} ${roboto.className} sm:h-36 h-80 p-6 sm:p-3 `}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        {renderSocialLinks()}
      </div>
      <Link href="tel:+79033750261">8-903-375-02-61</Link>
      <div className="font-bold">Политика конфеденциальности</div>
    </div>
  );
};

export default Footer;
