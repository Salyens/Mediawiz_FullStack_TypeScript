"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import { MotionDiv } from "@components/MotionDiv";
import LanguageDropdown from "./LanguageDropdown";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "РAЗРАБОТКА САЙТА", href: "/web" },
  { name: "КОНТЕКСТНАЯ РЕКЛАМА", href: "/webAd" },
  { name: "ВЕДЕНИЕ СОЦСЕТЕЙ", href: "/smm" },
  { name: "ТАРГЕТИРОВАННАЯ РЕКЛАМА", href: "/smmAds" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>(pathname);
  const socialLinks = ["FB", "IG", "TG", "VK"];

  const renderSocialLinks = (socialLinks: string[]) => {
    return socialLinks.map((link) => (
      <Link key={link} href="#">
        <Image
          src={`/social_icons/${link}.png`}
          width={40}
          height={40}
          alt={link}
          priority={true}
        />
      </Link>
    ));
  };

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <MotionDiv
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
    >
      <Disclosure as="nav" className={styles.bg}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl pl-2 pr-2 lg:pl-6 lg:pr-6 h-12 sm:h-16 lg:h-20 xl:h-24 flex justify-between items-center max_width">
              <div className="relative flex h-16 items-center justify-between w-full">
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden ">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="w-14 h-7 sm:w-[76px] sm:h-10 lg:w-24 lg:h-12 relative"
                    >
                      <Image
                        priority={true}
                        alt="Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        src="/logo.png"
                      />
                    </Link>
                  </div>
                  <div className="hidden  lg:flex flex-1 justify-around items-center px-4">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === current
                              ? `${styles.currentPage}`
                              : "",
                            ` px-1 py-1 text-sm md:text-base  ${styles.navLinks}`
                          )}
                          aria-current={item.href ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:flex">
                  {renderSocialLinks(socialLinks)}
                </div>

                <LanguageDropdown />
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </MotionDiv>
  );
}
