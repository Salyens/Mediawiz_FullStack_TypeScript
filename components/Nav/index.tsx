"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import SmallScreenMenu from "./SmallScreenMenu";
import BigScreenMenu from "./BigScreenMenu";
import styles from "./nav.module.css";
import { MotionDiv } from "@components/MotionDiv";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <MotionDiv
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className={classNames(styles.bg, open ? "pb-64" : "")}>
        <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 h-12 sm:h-16 lg:h-20 xl:h-24 ">
          <div className="flex h-full w-full items-center justify-between">
            <BigScreenMenu />
            <SmallScreenMenu open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Nav;
