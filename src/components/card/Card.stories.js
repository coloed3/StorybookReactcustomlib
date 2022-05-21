import React, { Children } from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  args: {
    children: "Hello World",
    borderColor: "red",
  },
};

export const Default = (args) => <Card {...args} />;

export const Bordered = (args) => <Card {...args} />;
Bordered.args = {
  radius: "10px",
  primary: true,
};

export const Background = (args) => <Card {...args} />;
Background.args = {
  primary: true,
};

export const height = (args) => <Card {...args} />;
height.args = {
  height: "200px",
  primary: false,
};

export const width = (args) => <Card {...args} />;
width.args = {
  width: "200px",
  primary: false,
};

export const finished = (args) => <Card {...args} />;
finished.args = {
  height: "200px",
  width: "200px",
  primary: true,
  radius: "20px",
  padding: "10px",
};
