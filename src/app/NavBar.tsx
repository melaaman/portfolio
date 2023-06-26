import { Menu } from "./components/menu/Menu";
import { BookIcon } from "./icons/BookIcon";
import { ContactIcon } from "./icons/ContactIcon";
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
    label: "Tekijästä",
    Icon: <WomanIcon fill={iconColor} />,
  },
  {
    href: "/texts",
    label: "Tekstejä",
    Icon: <BookIcon stroke={iconColor} />,
  },
  {
    href: "/contact",
    label: "Ota yhteyttä",
    Icon: <ContactIcon stroke={iconColor} />,
  },
];

export const NavBar = () => {
  return <Menu menuItems={menuItems} />;
};
