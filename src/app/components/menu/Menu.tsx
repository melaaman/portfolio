"use client";

import { useState } from "react";
import { HamburgerMenu } from "./Hamburger";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { Transition } from "@headlessui/react";

interface MenuProps {
  left?: boolean;
  menuItems: MenuItemProps[];
}

export const Menu = ({ left = false, menuItems }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Menu">
      <div
        className={`Menu-hambuger fixed z-20 top-4 ${
          left ? "left-4" : "right-4"
        }`}
      >
        <HamburgerMenu
          onClick={(): void => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      </div>
      <Transition
        show={isOpen}
        className={`Menu-items fixed w-screen h-screen bg-black grid place-items-center`}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-85"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-85"
        leaveTo="opacity-0"
      >
        <div className={`Menu-items-list flex flex-col gap-1`}>
          {menuItems.map((item, index) => {
            return (
              <MenuItem
                key={`${item.label}-${index}`}
                href={item.href}
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
