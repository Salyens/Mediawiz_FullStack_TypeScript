"use client";

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
import LoadingCircle from "@/components/LoadingCircle"; 
import { Link, usePathname } from "@navigation";

const LocalSwitcher = () => {
  const localActive = useLocale();
  const otherLocale = localActive === 'en' ? 'ru' : 'en';
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSetLoading = () => {
    setLoading(true)
  }

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
            <Link
              href={pathname}
              locale={otherLocale}
              className="flex gap-1 cursor-pointer"
              onClick={handleSetLoading}
            >
              <div className="w-8 h-6 relative">
                <Image
                  src={`/flags/${otherLocale}.png`}
                  fill
                  sizes="5vh"
                  className="object-cover"
                  alt="flag"
                />
                {loading && (
                  <div className="absolute inset-0 bg-white bg-opacity-50">
                    <LoadingCircle />
                  </div>
                )}
              </div>
              <span className="text-lg">{otherLocale.toUpperCase()}</span>
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default LocalSwitcher;