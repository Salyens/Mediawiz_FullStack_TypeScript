import Link from "next/link";
import styles from "./requestandsocila.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainModal from "@components/modals/MainModal";
import AnimationWrapper from "@components/AnimationWrapper";

interface SocialIcon {
  name: string;
  src: string;
}

const RequestAndSocial = () => {
  const t = useTranslations("MainForm");
  const s = useTranslations("MainPage");

  const renderSocialLinks = () => {
    const socialIcons: SocialIcon[] = [
      { name: "Telegram", src: "/TG" },
      { name: "VKontakte", src: "/VK" },
      { name: "Instagram", src: "/IG" },
      { name: "Facebook", src: "/FB" },
    ];
    return socialIcons.map((item) => (
      <Link
        className="w-14 h-14 md:w-20 md:h-20 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20 relative"
        href="#"
        key={item.name + item.src}
      >
        <Image
          src={`/social_icons${item.src}.png`}
          alt={item.name}
          fill={true}
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
          style={{ objectFit: "contain" }}
        />
      </Link>
    ));
  };

  return (
    <div className={`${styles.bg} w-full`}>
      <div className="flex items-center justify-between flex-col lg:flex-row main_container p-2 md:p-6 pt-12 pb-12">
        <AnimationWrapper
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.5,
          }}
          classes={`flex flex-col xl:text-2xl 2xl:text-4xl md:text:xl text-lg gap-3 min-h-72 md:min-h-80 xl:min-h-96 w-full lg:w-1/2 sm:items-center lg:items-start leading-snug ${styles.description}`}
        >
          <p className="text-center lg:text-left">{t("description")}</p>
          <Link className="flex w-fit m-auto lg:m-0" href="tel:+79033750261">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Image src="/phone.png" width={50} height={50} alt="phone" />
              <span className="text-lg md:text-2xl mt-12 mb-12 font-normal">
                8-903-375-02-61
              </span>
            </div>
          </Link>
          <p className="text-center lg:text-left">{t("request")}</p>
          <div className="flex justify-center lg:justify-start">
            <MainModal />
          </div>
        </AnimationWrapper>

        <AnimationWrapper
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.5,
          }}
          classes="mb-auto mt-6 lg:mt-0"
        >
          <p className="font-bold xl:text-2xl 2xl:text-4xl md:text-xl text-lg mb-4 md:mb-0 text-center">
            {s("weInSocial")}
          </p>
          <div className="flex justify-between items-center">
            {renderSocialLinks()}
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default RequestAndSocial;
