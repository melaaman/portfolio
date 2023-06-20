import { Menu } from "./../app/components/menu/Menu";
import type { Meta, StoryObj } from "@storybook/react";

const styles = {
  transform: "scale(1)",
  height: "15em",
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

export const Right: Story = {};

export const Left: Story = {
  args: {
    left: true,
  },
};
