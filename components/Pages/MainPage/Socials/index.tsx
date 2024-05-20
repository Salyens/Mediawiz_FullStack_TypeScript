import AnimationWrapper from "@components/AnimationWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  name: string;
  src: string;
}

const Socials = () => {
  const socialIcons: SocialIcon[] = [
    { name: "Telegram", src: "/TG" },
    { name: "VKontakte", src: "/VK" },
    { name: "Instagram", src: "/IG" },
    { name: "Facebook", src: "/FB" },
  ];
  const t = useTranslations("MainPage");

  const renderSocialLinks = () => {
    return socialIcons.map((item) => (
      <Link
        className="xl:w-36 xl:h-36 lg:h-28 lg:w-28 md:h-24 md:w-24 sm:w-20 sm:h-20 w-20 h-20 relative"
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
    <AnimationWrapper
      initial={{
        y: 1000,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1,}}
      classes="main_container pr-6 pl-6 mt-10"
    >
      <div className="flex sm:justify-between items-center flex-col lg:flex-row min-h-40 xl:min-h-80 pb-2 gap-2 sm:gap-8">
        <p className="font-bold md:text-4xl xl:text-5xl 2xl:text-6xl sm:text-3xl text-xl mb-4 md:mb-0">
          {t("weInSocial")}
        </p>
        <div className="flex justify-between items-center">
          {renderSocialLinks()}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Socials;