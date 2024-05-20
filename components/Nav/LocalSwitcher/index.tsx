"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./localswitcher.module.css";
import { setCookie } from "nookies";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${lang}$1`);

    setCookie(null, "NEXT_LOCALE", lang, { path: "/" });

    startTransition(() => {
      router.replace(newPath);
    });
    setIsOpen(false);
  };

  const handleOnClickMainBtn = () => {
    setIsOpen((prev) => !prev);
  };

  const renderMenuItem = () => {
    const locales = ["en", "ru"];
    return locales.map(
      (item) =>
        item !== localActive && (
          <div
            key={item}
            onClick={() => handleOnClick(item)}
            className={styles.items_wrapper}
          >
            <Menu.Item>
              {({ active }) => (
                <div className="flex cursor-pointer gap-1">
                  <div className="w-8 h-6 relative">
                    <Image
                      src={`/flags/${item}.png`}
                      fill
                      sizes="5vh"
                      className="object-contain"
                      alt="flag"
                    />
                  </div>

                  <span className="text-lg">{item.toUpperCase()}</span>
                </div>
              )}
            </Menu.Item>
          </div>
        )
    );
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={handleOnClickMainBtn}
          className="flex w-full justify-center text-lg "
        >
          <div className="flex gap-1 items-center ">
            <div className="w-8 h-6 relative">
              <Image
                src={`/flags/${localActive}.png`}
                fill
                sizes="5vh"
                className="object-contain"
                alt="flag"
              />
            </div>

            <span>{localActive.toLocaleUpperCase()}</span>
          </div>
          <div className="w-4 h-3 relative">
            <Image
              src={isOpen ? "/nav/arrow_nav_top.png" : "/nav/arrow-nav.png"}
              fill
              sizes="5vh"
              className="object-contain"
              alt="arrow"
              style={{ top: "50%" }}
            />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 z-50"
          static
          onClick={() => setIsOpen(false)}
        >
          {renderMenuItem()}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
