import React from "react";
import Grid from "./Grid";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
`;

const GridD = styled(Grid.Item)`
  background-color: #fec8d8;
`;

const GridF = styled(Grid.Item)`
  background-color: #957dad;
`;

const GridG = styled(Grid.Item)`
  background-color: #e0bbe4;
`;

const GridE = styled(Grid.Item)`
  background-color: #c7ceea;
`;

const MarginTop = styled.div`
  margin-top: 10px;
`;

export default function GridDisplay() {
  return (
    <>
      <Title> Grid Display </Title>
      <Grid width='200px' align='center' gap='5px'>
        <GridD span={1}>1</GridD>
        <GridD span={1}>2</GridD>
        <GridD span={1}>3</GridD>
        <GridD span={1}>3</GridD>
      </Grid>
      <MarginTop>
        <Grid width='300px'>
          <GridF span={1}>1</GridF>
          <GridF span={2}>2</GridF>
          <GridF span={2}>3</GridF>
          <GridF span={1}>4</GridF>
        </Grid>
      </MarginTop>

      <MarginTop>
        <Grid width='300px'>
          <GridG span={3}>1</GridG>
          <GridG span={1}>2</GridG>
          <GridG span={1}>3</GridG>
          <GridG span={1}>4</GridG>
        </Grid>
      </MarginTop>
      <MarginTop>
        <Grid width='100px'>
          <GridE span={1}>1</GridE>
          <GridE span={1}>2</GridE>
          <GridE span={1}>3</GridE>
          <GridE span={1}>4</GridE>
          <GridE span={1}>5</GridE>
          <GridE span={1}>6</GridE>
          <GridE span={1}>7</GridE>
          <GridE span={1}>8</GridE>
          <GridE span={1}>9</GridE>
          <GridE span={1}>10</GridE>
          <GridE span={1}>11</GridE>
          <GridE span={1}>12</GridE>
        </Grid>
      </MarginTop>
    </>
  );
}
