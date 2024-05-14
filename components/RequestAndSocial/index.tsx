import Link from "next/link";
import styles from "./requestandsocila.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainModal from "@components/modals/MainModal";

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
        className="w-14 h-14 md:w-20 md:h-20 xl-14 xl-14 2xl:w-20 2xl:h-20 relative"
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
    <div className={`${styles.bg} w-full `}>
      <div className="flex items-center justify-between flex-col lg:flex-row main_container p-6 pt-12 pb-12">
        <div
          className={`flex flex-col xl:text-2xl 2xl:text-4xl md:text:xl text-lg gap-3 w-full lg:w-1/2 sm:items-center lg:items-start ${styles.description}`}
        >
          <p>{t("description")}</p>
          <Link href="tel:+79033750261">
            <div className="flex items-center gap-2">
              <Image src="/phone.png" width={50} height={50} alt="phone" />
              <span>8-903-375-02-61</span>
            </div>
          </Link>
          <p>{t("request")}</p>
          <MainModal />
        </div>
        <div className="mb-auto mt-6 lg:mt-0">
          <p className="font-bold xl:text-2xl 2xl:text-4xl md:text:xl text-lg mb-4 md:mb-0 text-center">
            {s("weInSocial")}
          </p>
          <div className="flex justify-between items-center">
            {renderSocialLinks()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAndSocial;
