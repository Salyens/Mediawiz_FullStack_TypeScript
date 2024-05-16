"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./localswitcher.module.css";
import { setCookie } from 'nookies';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${lang}$1`);

    // Записываем локаль в куки
    setCookie(null, 'NEXT_LOCALE', lang, { path: '/' });

    startTransition(() => {
      router.replace(newPath);
    });
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
                  <Image
                    src={`/flags/${item}.png`}
                    width={34}
                    height={16}
                    alt="flag"
                    priority
                  />
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
          <div className="flex gap-1">
            <Image
              src={`/flags/${localActive}.png`}
              width={34}
              height={16}
              alt="flag"
            />
            <span>{localActive.toLocaleUpperCase()}</span>
          </div>
          <Image
            src={isOpen ? "/arrow_nav_top.png" : "/arrow-nav.png"}
            width={16}
            height={12}
            alt="arrow"
            className="m-auto"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-50">
          {renderMenuItem()}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
