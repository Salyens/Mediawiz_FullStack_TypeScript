import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useState } from "react";

const LocalSwitcher = () => {
  const localActive = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const anotherLocale = localActive === "ru" ? "en" : "ru";
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOnClick = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${lang}$1`);
    setCookie(null, "NEXT_LOCALE", lang, { path: "/" });
    router.replace(newPath);
  };

  return (
    <Menubar onValueChange={() => handleOnChange()}>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex gap-1 items-center">
            <div className="w-8 h-6 relative">
              <Image
                src={`/flags/${localActive}.png`}
                fill
                sizes="5vh"
                className="object-contain"
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

          {/* <ChevronDown className={} /> */}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <div
              onClick={() => handleOnClick(anotherLocale)}
              className="flex gap-1 cursor-pointer"
            >
              <div className="w-8 h-6 relative">
                <Image
                  src={`/flags/${anotherLocale}.png`}
                  fill
                  sizes="5vh"
                  className="object-contain"
                  alt="flag"
                />
              </div>
              <span className="text-lg">{anotherLocale.toUpperCase()}</span>
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default LocalSwitcher;
