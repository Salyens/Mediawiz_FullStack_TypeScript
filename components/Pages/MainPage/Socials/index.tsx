import { socialLinks } from "@constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@navigation";
import { MotionDiv } from "@components/MotionDiv";

const Socials = () => {
  const t = useTranslations("MainPage");

  return (
    <MotionDiv
      initial={{
        paddingTop: 500,
        opacity: 0,
      }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ paddingTop: 0, opacity: 1 }}
      className="main_container pr-6 pl-6 mt-10"
    >
      <div className="flex sm:justify-between items-center flex-col lg:flex-row min-h-40 xl:min-h-80 pb-2 gap-2 sm:gap-8">
        <p className="font-bold md:text-4xl xl:text-5xl 2xl:text-6xl sm:text-3xl text-xl mb-4 md:mb-0">
          {t("weInSocial")}
        </p>
        <div className="flex justify-between items-center">
          {socialLinks.map((item) => (
            <Link
              className="xl:w-36 xl:h-36 lg:h-28 lg:w-28 md:h-24 md:w-24 sm:w-20 sm:h-20 w-20 h-20 relative"
              href={item.href}
              key={item.name + item.href}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={true}
            >
              <Image
                src={`/social_icons/${item.shortName}.png`}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Socials;
