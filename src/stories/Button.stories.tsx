import type { Meta, StoryObj } from "@storybook/react";

import { Color } from "./../app/utils/color";
import { Button, Size } from "./../app/components/Button";

const LABEL_TEXT = "Click me!";

const meta: Meta<typeof Button> = {
  title: "Portfolio/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: Object.values(Color),
        name: "color",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: LABEL_TEXT,
  },
};

export const ButtonColors: Story = (args: {
  size?: Size;
  outlined?: boolean;
  label?: string;
}) => {
  return (
    <div className="flex gap-4">
      <Button label="Click me!" color={Color.GREEN} {...args} />
      <Button label="Click me!" color={Color.LIGHT_GREEN} {...args} />
      <Button label="Click me!" color={Color.BLACK} {...args} />
    </div>
  );
};

ButtonColors.storyName = "Button colors";
ButtonColors.argTypes = {
  onClick: { table: { disable: true } },
  color: { table: { disable: true } },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: LABEL_TEXT,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    label: LABEL_TEXT,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: LABEL_TEXT,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: LABEL_TEXT,
  },
};

export const ButtonSet: Story = (args: { color: Color; size?: Size }) => {
  return (
    <div className="flex gap-4">
      <Button label="OK" {...args} />
      <Button variant="outlined" label="Cancel" {...args} />
    </div>
  );
};

ButtonSet.storyName = "Button set";
ButtonSet.argTypes = {
  label: { table: { disable: true } },
  variant: { table: { disable: true } },
  onClick: { table: { disable: true } },
};
