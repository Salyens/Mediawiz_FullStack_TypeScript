import classNames from "classnames";
import LocalSwitcher from "../LocalSwitcher";
import NavLinks from "../NavLinks";
import NavLogo from "../NavLogo";
import SocialLinks from "../SocialLinks";

const BigScreenMenu = () => {
  return (
    <>
      <NavLogo />

      <div className={classNames("flex-1 items-center hidden lg:flex")}>
        <NavLinks isBigScreen={true} />
      </div>
      <div className="hidden lg:flex">
        <SocialLinks />
      </div>

      <div className="hidden lg:flex ml-5 2xl:ml-16 xl:ml-10 lg:ml-8">
        <LocalSwitcher />
      </div>
    </>
  );
};

export default BigScreenMenu;
