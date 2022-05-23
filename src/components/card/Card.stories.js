
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    children: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    primary: { control: "color" },
    color: { control: "color" },
    radius: { control: "text" },
    padding: { control: "text" },
    border: { control: "color" },
  },
};


export const CardTest = (args) => <Card {...args} />;
CardTest.args = {
  children: "Hello World",
  width: "200px",
  height: "200px",
  primary: "blue",
  radius: "10px",
  padding: "10px",
  border: "blue",
  color: "black",
};



