import GridDisplay from "./GridDisplay";

export default {
  title: "Grid",
  component: GridDisplay,
  args: {
    children: "Hello World",
  },
};

export const GridShow = (args) => <GridDisplay {...args} />;
GridShow.args = {
  children: "test",
};
