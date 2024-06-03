import { useTranslations } from "next-intl";
import styles from ".././nav.module.css";
import { NavLink } from "@interfaces/special";
import classNames from "classnames";
import Link from "next/link";

const NavLinksSmallScreen = () => {
  const t = useTranslations("Navigation");

  const navigation: NavLink[] = [
    { name: t("web"), href: "/web" },
    { name: t("webAd"), href: "/webAd" },
    { name: t("smm"), href: "/smm" },
    { name: t("smmAd"), href: "/smmAd" },
  ];

  return (
    <div className={classNames("gap-2 pb-7", styles.line_mini)}>
      {navigation.map((item) => (
        <Link key={item.name} prefetch={true} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksSmallScreen;
