import { useTranslations } from "next-intl";
import styles from ".././nav.module.css";
import { NavLink } from "@interfaces/special";
import { Disclosure } from "@headlessui/react";

const NavLinksSmallScreen = () => {
  const t = useTranslations("Navigation");

  const navigation: NavLink[] = [
    { name: t("web"), href: "/web" },
    { name: t("webAd"), href: "/webAd" },
    { name: t("smm"), href: "/smm" },
    { name: t("smmAd"), href: "/smmAd" },
  ];

  return (
    <div className={`${styles.line_mini} gap-2 pb-8`}>
      {navigation.map((item) => (
        <Disclosure.Button key={item.name} as="a" href={item.href}>
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export default NavLinksSmallScreen;
