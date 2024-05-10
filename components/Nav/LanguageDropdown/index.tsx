import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./languagedropdown.module.css";

const LanguageDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full justify-center text-lg ">
          <div className="flex">
            <Image src="/flags/russia.png" width={34} height={16} alt="flag" />
            <span>RU</span>
          </div>
          <Image
            src="/arrow-nav.png"
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
        <Menu.Items className="absolute left-0 z-20">
          <div className={styles.items_wrapper}>
            <Menu.Item>
              {({ active }) => (
                <div className="flex cursor-pointer">
                  <Image
                    src="/flags/RU.png"
                    width={34}
                    height={16}
                    alt="flag"
                  />
                  <span>RU</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex cursor-pointer">
                  <Image
                    src="/flags/EN.png"
                    width={34}
                    height={16}
                    alt="flag"
                  />
                  <span>EN</span>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageDropdown;
