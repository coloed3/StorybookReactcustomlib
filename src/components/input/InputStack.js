import styled from "styled-components";
import Input from "./Input";
import Grid from "../grid/Grid";
import Title from "../title/Title";
import Card from "../card/Card";
import IconButton from "../button/IconButton";
import { FaTrash } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import React from "react";

const Margin = styled.div`
  margin-bottom: 10px;
`;

const spacing = {
  m1: "10px",
  m2: "20px",
  m3: "30px",
  m4: "40px",
  m5: "50px",
  m6: "60px",
  m7: "70px",
  m8: "80px",
};
const MarginBottom = styled.div`
  margin-bottom: ${(props) => props.spacing};
`;
const MargionTop = styled.div`
  margin-top: ${(props) => props.spacing};
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding: 100px;
  position: relative;
  right: -12.5vw;
`;

const Icon = styled.div`
  position: absolute;
  right: 36vw;
  top: 11.5rem;
`;

const InputStack = (props) => {
  return (
    <Container2>
      <Card width='50%'>
        <Container>
          <Grid gap='5px'>
            <Margin>
              <Title size='medium' weight='bold'>
                Login
              </Title>
            </Margin>

            <Grid.Item span={4}>
              <label>
                <Input
                  color='#000'
                  border='1px solid grey'
                  width='200px'
                  height='30px'
                  backgroundColor='#f1f1f1'
                  radius='2.5px'
                  placeholder='Email'
                />
              </label>
            </Grid.Item>

            <Grid.Item span={4}>
              <label>
                <Input
                  color='#000'
                  border='1px solid grey'
                  width='200px'
                  height='30px'
                  backgroundColor='#f1f1f1'
                  radius='2.5px'
                  placeholder='Password'
                />
                <Icon>
                  <MdMail size='20px' color='#000' />
                </Icon>
              </label>
            </Grid.Item>

            <Grid.Item span={4}>
              <IconButton
                backgroundColor='blue'
                color='white'
                padding='10px 69px'
                hoverBackgroundColor='lightblue'
              >
                Submit <MdMail />
              </IconButton>
            </Grid.Item>
          </Grid>
        </Container>
      </Card>
    </Container2>
  );
};

export default InputStack;
