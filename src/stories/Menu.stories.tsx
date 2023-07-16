import { HomeIcon } from "./../app/icons/HomeIcon";
import { Menu } from "./../app/components/menu/Menu";
import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "./../app/utils/color";
import { ContactIcon } from "./../app/icons/ContactIcon";

const menuItems = [
  {
    href: "/",
    label: "Page 1",
    Icon: <HomeIcon stroke={Color.WHITE} />,
  },
  {
    href: "/",
    label: "Page 2",
    Icon: <ContactIcon stroke={Color.WHITE} />,
  },
];

const styles = {
  transform: "scale(1)",
  height: "10em",
};

const meta: Meta<typeof Menu> = {
  title: "Portfolio/Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Right: Story = {
  args: {
    menuItems,
  },
};

export const Left: Story = {
  args: {
    left: true,
    menuItems,
  },
};
