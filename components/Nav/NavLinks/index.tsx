"use client";

import { useTranslations } from "next-intl";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navlinks.module.css";
import { NavLink } from "@interfaces/special";
import classNames from "classnames";
import { Link } from "@navigation";

interface navLinksProp {
  isBigScreen: boolean;
}
const NavLinks: React.FC<navLinksProp> = ({ isBigScreen }) => {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>(pathname);
  const t = useTranslations("Navigation");

  const navigation: NavLink[] = [
    { name: t("web"), href: "/web" },
    { name: t("webAd"), href: "/webAd" },
    { name: t("smm"), href: "/smm" },
    { name: t("smmAd"), href: "/smmAd" },
  ];

  useEffect(() => {
    const path = pathname.split("/");
    setCurrent(`/${path[2]}`);
  }, [pathname]);

  return (
    <div
      className={classNames(
        "justify-center items-center ml-5",
        isBigScreen ? "hidden lg:flex flex-1 gap-5" : "flex flex-col lg:hidden"
      )}
    >
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch={true}
          className={classNames(
            "px-1 py-1 ml-0 text-sm md:text-base text-start",
            styles.navLinks,
            item.href === current ? styles.currentPage : ""
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
