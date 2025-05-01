import { socialLinks } from "@constants";
import Image from "next/image";
import { Link } from "@navigation";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex">
      {socialLinks.map((link, index) => (
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
            unoptimized
            priority={true}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
