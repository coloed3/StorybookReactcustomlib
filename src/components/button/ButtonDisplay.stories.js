import ButtonDisplay from "./ButtonDisplay";

export default {
  title: "Button",
  component: ButtonDisplay,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export const ButtonStack = (args) => <ButtonDisplay {...args} />;
ButtonStack.args = {
  children: "test",
};
