import { socialLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  const renderLinks = () => {
    return socialLinks.map((link, index) => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        key={link.name + index}
        href={link.href}
      >
        <Image
          src={`/social_icons/${link.name}.png`}
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
