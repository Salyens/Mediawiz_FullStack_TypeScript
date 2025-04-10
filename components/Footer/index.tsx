import { Link } from "@navigation";
import Image from "next/image";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { roboto } from "@app/[locale]/layout";
import { socialLinks } from "@constants";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div
      className={classNames(
        "pt-10 pb-10 gap-4",
        styles.footer_wrapper,
        roboto.className
      )}
    >
      <div className="flex gap-2">
        {socialLinks.map((item) => (
          <Link
            prefetch={true}
            href={item.href}
            key={item.name + item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-base, flex sm:justify-center items-center sm:mr-1">
              <Image
                src={`/social_icons/${item.shortName}.png`}
                width={40}
                height={40}
                alt={item.name}
              />
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <Link prefetch={true} href="tel:+79033750261">
        8-903-375-02-61
      </Link>
      <div className="font-bold">{t("policy")}</div>
    </div>
  );
};

export default Footer;
