import React from "react";
import styled from "styled-components";
//create button component

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.bgColorHover};
  }
`;

export default Button;
