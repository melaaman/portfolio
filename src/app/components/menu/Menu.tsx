"use client";

import { useEffect, useState } from "react";
import { HamburgerMenu } from "./Hamburger";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

interface MenuProps {
  left?: boolean;
  menuItems: MenuItemProps[];
}

export const Menu = ({ left = false, menuItems }: MenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="Menu absolute z-10 top-0">
      <div
        className={`Menu-hambuger fixed z-20 top-8 ${
          left ? "left-8" : "right-8"
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
        <div className={`Menu-items-list flex flex-col gap-3`}>
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
