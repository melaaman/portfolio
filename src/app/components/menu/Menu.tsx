import { useState } from "react";
import { HamburgerMenu } from "./Hamburger";
import { MenuItem } from "./MenuItem";
import { Transition } from "@headlessui/react";

interface MenuProps {
  left?: boolean;
}

const menuItems = [
  {
    label: "Etusivu",
  },
  {
    label: "Minä",
  },
];

export const Menu = ({ left }: MenuProps = { left: false }) => {
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
        className={`Menu-items bg-lightGreen`}
        enter="transition-opacity ease-linear duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {menuItems.map((item, index) => {
          return <MenuItem key={`${item.label}-${index}`} label={item.label} />;
        })}
      </Transition>
    </div>
  );
};
