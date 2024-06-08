import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        prefetch={true}
        className="w-14 h-7 sm:w-[76px] sm:h-10 lg:w-24 lg:h-12 relative"
      >
        <Image
          priority={true}
          alt="Logo"
          fill
          sizes="10vh"
          className="object-contain"
          src="/nav/logo.png"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
