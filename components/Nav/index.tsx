"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./nav.module.css";
import { MotionDiv } from "@components/MotionDiv";
import LocalSwitcher from "./LocalSwitcher";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import NavLinksSmallScreen from "./NavLinksSmallScreen";
import NavLogo from "./NavLogo";
import classNames from "classnames";

const Nav = () => {
  return (
    <MotionDiv
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 1 }}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <div
            className={classNames(styles.bg, open && "border-0 shadow-none")}
          >
            <div className=" mx-auto max-w-7xl pl-2 pr-2 lg:pl-6 lg:pr-6 h-12 sm:h-16 lg:h-20 xl:h-24 flex justify-between items-center max_width">
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
                  <NavLogo />
                  <NavLinks />
                </div>
                <div className="hidden lg:flex">
                  <SocialLinks />
                </div>

                <div className="hidden lg:flex ml-5 2xl:ml-16 xl:ml-10 lg:ml-8">
                  <LocalSwitcher />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="flex flex-col items-center gap-4 pb-6 ">
                <NavLinksSmallScreen />
                <SocialLinks />
                <LocalSwitcher />
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </MotionDiv>
  );
};

export default Nav;
