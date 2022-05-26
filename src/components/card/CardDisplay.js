import React from "react";
import Card from "./Card";
import Grid from "../grid/Grid";
import styled from "styled-components";
import Title from "../title/Title";
import IconButton from "../button/IconButton";

const CardBorder = styled.div`
  border: ${(props) => (props.border ? `1px solid ${props.border} ` : "blue")};
  padding: 10px;
  margin: 10px;
`;

const WordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: black;
  margin: 5px;
  height: 30px;
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fff;
`;

const WordWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: black;
  margin: 10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #e2e2e2;
`;
const WordWrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: black;
  margin: 10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #f3f3f3;
`;
export default function CardDisplay(props) {
  return (
    <Grid>
      <Card
        primary='#fff'
        color='white'
        radius='5px'
        padding='0px'
        border='1px solid #CED4DA'
        height='auto'
        width='auto'
      >
        <Title
          size='medium'
          color='#28696D'
          align='left'
          weight='bold'
          margin='10px'
        >
          Add Narrative
        </Title>
        <Grid width='300px'>
          <Grid.Item span={2}>
            <WordWrapper>
              <Title size='small' weight='bold'>
                {" "}
                Date
              </Title>
              <p>Provider</p>
              <p> Notes</p>
            </WordWrapper>
            <WordWrapper2>
              <p style={{ fontWeight: "100", fontSize: "10px" }}> 01/01/2022</p>
              <p style={{ fontWeight: "100", fontSize: "10px" }}> Ehaung</p>
              <p style={{ fontWeight: "100", fontSize: "10px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </WordWrapper2>
            <WordWrapper3>
              <p style={{ fontWeight: "100", fontSize: "10px" }}> 01/01/2022</p>
              <p style={{ fontWeight: "100", fontSize: "10px" }}> Ehaung</p>
              <p style={{ fontWeight: "100", fontSize: "10px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </WordWrapper3>
          </Grid.Item>

          <Grid.Item span={1}>
            <CardBorder border='#ced4da'>
              <Title size='small' color='#000' align='left' weight='bold'>
                Note
              </Title>
              <p
                style={{
                  color: "black",
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  fontWeight: "100",
                  padding: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardBorder>
          </Grid.Item>
        </Grid>

        <IconButton
          backgroundColor='#28696D'
          color='white'
          borderRadius='3.2px'
          padding='10px 20px'
          margin='10px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='#19606D'
          hoverColor='white'
        >
          Add
        </IconButton>

        <IconButton
          backgroundColor='transparent'
          color='#28696D'
          border='1px solid #28696D'
          borderRadius='3.2px'
          padding='10px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='#19606D'
          hoverColor='white'
        >
          Cancel
        </IconButton>
      </Card>
    </Grid>
  );
}
