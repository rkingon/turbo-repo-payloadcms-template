import { Button, type ButtonProps } from "@repo/ui/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type Story = StoryObj<ButtonProps>;

const meta: Meta<ButtonProps> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), children: "Click me!" },
};

export default meta;

export const Primary: Story = {};
