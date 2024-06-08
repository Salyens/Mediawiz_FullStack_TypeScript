'use client';

import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import classNames from "classnames";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoadingCircle from "@components/LoadingCircle";

const LocalSwitcher = () => {
  const localActive = useLocale();
  const pathname = usePathname();
  const anotherLocale = localActive === "ru" ? "en" : "ru";
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOnClick = () => {
    setIsLoading(true);
  };

  const buildLink = (lang: string) => {
    return pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${lang}$1`);
  };

  return (
    <Menubar onValueChange={handleOnChange}>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex gap-1 items-center">
            <div className="w-8 h-6 relative">
              <Image
                src={`/flags/${localActive}.png`}
                fill
                sizes="5vh"
                className="object-cover"
                alt="flag"
              />
            </div>
            <span className="text-lg">{localActive.toUpperCase()}</span>
          </div>

          <div className="w-4 h-4 m-auto relative">
            <Image
              src="/nav/arrow-nav.png"
              fill
              sizes="5vh"
              className={classNames(
                "object-contain ml-2",
                isOpen ? "rotate-180" : ""
              )}
              alt="flag"
            />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={buildLink(anotherLocale)} onClick={handleOnClick}>
              <div className="flex gap-1 cursor-pointer relative">
                <div className="w-8 h-6 relative">
                  <Image
                    src={`/flags/${anotherLocale}.png`}
                    fill
                    sizes="5vh"
                    className="object-cover"
                    alt="flag"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 bg-white bg-opacity-50">
                      <LoadingCircle />
                    </div>
                  )}
                </div>
                <span className="text-lg">{anotherLocale.toUpperCase()}</span>
              </div>
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default LocalSwitcher;
