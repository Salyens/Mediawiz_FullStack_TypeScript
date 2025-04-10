import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SocialLinks from "../SocialLinks";
import LocalSwitcher from "../LocalSwitcher";
import NavLinks from "../NavLinks";

interface SmallScreenMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenMenu: React.FC<SmallScreenMenuProps> = ({ open, setOpen }) => {
  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <DropdownMenuTrigger className="ml-auto flex lg:hidden">
        {open ? (
          <XMarkIcon
            className="block h-6 w-6 relative z-50 mt-2"
            aria-hidden="true"
          />
        ) : (
          <Bars3Icon
            className="block h-6 w-6 relative z-50"
            aria-hidden="true"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen z-50">
        <div className="flex flex-col justify-center items-center w-full gap-3">
          <NavLinks isBigScreen={false} />
          <SocialLinks />
          <LocalSwitcher />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SmallScreenMenu;
