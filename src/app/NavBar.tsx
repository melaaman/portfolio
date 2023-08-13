import { Menu } from "./components/menu/Menu";
import { BookIcon } from "./icons/BookIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { WomanIcon } from "./icons/WomanIcon";
import { Color } from "./utils/color";

const iconColor = Color.WHITE;

const menuItems = [
  {
    href: "/",
    label: "Etusivu",
    Icon: <HomeIcon stroke={iconColor} />,
  },
  {
    href: "/about",
    label: "Minusta",
    Icon: <WomanIcon fill={iconColor} />,
  },
  {
    href: "/texts",
    label: "Bibliografia",
    Icon: <BookIcon stroke={iconColor} />,
  },
];

export const NavBar = () => {
  return <Menu menuItems={menuItems} />;
};
