"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navlinks.module.css";
import { NavLink } from "@interfaces/special";
import classNames from "classnames";

const NavLinks = () => {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>(pathname);
  const localActive = useLocale();
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
    <div className="hidden lg:flex flex-1 justify-around items-center px-4">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={`/${localActive}/${item.href}`}
            prefetch={true}
            className={classNames(
              "px-1 py-1 text-sm md:text-base",
              styles.navLinks,
              item.href === current ? styles.currentPage : ""
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
