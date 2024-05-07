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

  const renderSocialLinks = () => {
    return socialIcons.map((item) => (
      <Link
        className="xl:w-36 xl:h-36 lg:h-28 lg:w-28 md:h-24 md:w-24 sm:w-20 sm:h-20 w-14 h-14 relative"
        href="#"
        key={item.name + item.src}
      >
        <Image
          src={`/social_icons${item.src}.png`}
          alt={item.name}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </Link>
    ));
  };

  return (
    <div className="main_container pr-6 pl-6">
      <div className="flex justify-between items-center flex-col lg:flex-row min-h-40 xl:min-h-80 pt-8 pb-8 sm:gap-8">
        <p className="font-bold md:text-4xl xl:text-5xl 2xl:text-6xl sm:text-3xl text-lg">
          МЫ В СОЦИАЛЬНЫХ СЕТЯХ
        </p>
        <div className="flex justify-between items-center">
          {renderSocialLinks()}
        </div>
      </div>
    </div>
  );
};

export default Socials;
