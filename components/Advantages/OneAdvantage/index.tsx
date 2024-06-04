import { roboto } from "@app/[locale]/layout";
import FindMoreLink from "@components/FindMoreLink";
import { IItemAndImg } from "@interfaces/common";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface OneAdvantageProps {
  data: IItemAndImg;
}
const OneAdvantage: React.FC<OneAdvantageProps> = ({ data }) => {

  return (
    <div className="flex min-w-72 xl:w-6/12 ">
      <div className="min-w-10 min-h-10 sm:min-w-24 sm:min-h-24 relative m-auto">
        <Image
          src={data.imgURL}
          alt={`Icon ${data.title} `}
          fill
          sizes="15vh"
        />
      </div>

      <div className="flex flex-col p-2 sm:p-5">
        <h3 className="second_title text-lg sm:text-2xl mb-1 sm:mb-3 sm:pt-5">
          {data.title}
        </h3>
        <p
          className={classNames(
            "second_desc text-sm sm:text-lg md:text-lg 2xl:text-2xl",
            roboto.className
          )}
        >
          {data.description}
        </p>

        {"href" in data && data.href !== "/*" && (
          <div className="flex md:mt-4 xl:mt-6 2xl:mt-7 pb-4">
            <FindMoreLink href={data.href} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OneAdvantage;
