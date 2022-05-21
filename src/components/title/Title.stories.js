import Title from "./Title";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    align: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    margin: {
      control: {
        type: "text",
      },
    },
    padding: {
      control: {
        type: "text",
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["light", "normal", "bold"],
      },
    },
  },
};

export const Heading = (args) => <Title {...args} />;
Heading.args = {
  children: "Hello World",
  size: "medium",
  color: "red",
  align: "center",
  margin: "10px",
  padding: "10px",
  weight: "bold",
};
