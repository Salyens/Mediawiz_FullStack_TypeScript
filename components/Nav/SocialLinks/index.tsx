import { socialLinks } from "@constants";
import Image from "next/image";
import { Link } from "@navigation";
import React from "react";

const SocialLinks = () => {
  const renderLinks = () => {
    return socialLinks.map((link, index) => (
      <Link
        prefetch={true}
        target="_blank"
        rel="noopener noreferrer"
        key={link.name + index}
        href={link.href}
      >
        <Image
          src={`/social_icons/${link.shortName}.png`}
          width={40}
          height={40}
          alt={link.name}
          priority={true}
        />
      </Link>
    ));
  };
  return <div className="flex">{renderLinks()}</div>;
};

export default SocialLinks;
