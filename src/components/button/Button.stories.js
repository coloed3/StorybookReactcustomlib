import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    bgColor: {
      control: {
        type: "color",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    fontSize: {
      control: {
        type: "text",
      },
    },
    fontWeight: {
      control: {
        type: "select",
        options: ["light", "normal", "bold"],
      },
    },
    borderRadius: {
      control: {
        type: "text",
      },
    },
    border: {
      control: {
        type: "text",
      },
    },
    padding: {
      control: {
        type: "text",
      },
    },
    margin: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    bgColorHover: {
      control: {
        type: "color",
      },
    },
  },
};

export const ButtonCreate = (args) => <Button {...args} />;
ButtonCreate.args = {
  children: "Hello World",
  bgColor: "red",
  color: "white",
  fontSize: "16px",
  fontWeight: "normal",
  borderRadius: "5px",
  border: "none",
  padding: "10px",
  margin: "10px",
  width: "100px",
  height: "30px",
  bgColorHover: "blue",
};
