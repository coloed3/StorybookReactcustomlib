import CardDisplay from "./CardDisplay";

export default {
  title: "Card",
  component: CardDisplay,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export const CardStack = (args) => <CardDisplay {...args} />;
CardStack.args = {
  children: "test",
};
