import { useState } from "react";
import { HamburgerMenu } from "./Hamburger";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { Transition } from "@headlessui/react";
import { WomanIcon } from "../../icons/WomanIcon";
import { HomeIcon } from "../../icons/HomeIcon";
import { Color } from "../../utils/color";

interface MenuProps {
  left?: boolean;
  menuItems: MenuItemProps[];
}

const menuItems = [
  {
    label: "Etusivu",
    Icon: <HomeIcon stroke={Color.LIGHT_GREEN} />,
  },
  {
    label: "Minä",
    Icon: <WomanIcon fill={Color.LIGHT_GREEN} />,
  },
];

export const Menu = ({ left = false, menuItems }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Menu">
      <div
        className={`Menu-hambuger fixed z-20 ${left ? "left-4" : "right-4"}`}
      >
        <HamburgerMenu
          onClick={(): void => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      </div>
      <Transition
        show={isOpen}
        className={`Menu-items relative flex justify-center ${
          left ? "sm:justify-start sm:ml-12" : "sm:justify-end sm:mr-12"
        } `}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-75"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-75"
        leaveTo="opacity-0"
      >
        <div className="Menu-items-list fixed top-12 min-w-[80%] sm:min-w-[33.33%] divide-solid divide-y-4 divide-lightGray">
          {menuItems.map((item, index) => {
            return (
              <MenuItem
                key={`${item.label}-${index}`}
                label={item.label}
                Icon={item.Icon}
              />
            );
          })}
        </div>
      </Transition>
    </div>
  );
};
