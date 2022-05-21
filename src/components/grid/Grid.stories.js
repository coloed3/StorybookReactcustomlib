import React from "react";
import Grid from "./Grid";
import styled from "styled-components";

export const TestDiv = styled.div`
  background-color: steelblue;
  height: auto;
  width: auto;
  color: white;
`;

export default {
  title: "Grid",
  component: Grid,
  args: {
    children: "Hello World",
    width: "200px",
    gap: "10px",
    align: "center",
  },
};

export const GridTest = (args) => <Grid {...args} />;
GridTest.args = {
  children: [
    <TestDiv>1</TestDiv>,
    <TestDiv>2</TestDiv>,
    <TestDiv>3</TestDiv>,
    <TestDiv>4</TestDiv>,
  ],
  width: "200px",
  gap: "10px",
  align: "center",
};
