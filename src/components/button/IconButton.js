import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
const IconButtonStyle = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0px"};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9em")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  :hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "white"};
    transition: background-color 0.5s ease-in-out;
    color: ${(props) => (props.hoverColor ? props.hoverColor : "black")};
  }
`;

export default function IconButton(props) {
  return (
    <>
      <IconButtonStyle {...props}>{props.children}</IconButtonStyle>
    </>
  );
}

IconButton.propTypes = {
  children: propTypes.node,
  backgroundColor: propTypes.string,
  color: propTypes.string,
  border: propTypes.string,
  borderRadius: propTypes.string,
  padding: propTypes.string,
  margin: propTypes.string,
  fontSize: propTypes.string,
  fontWeight: propTypes.string,
  hoverBackgroundColor: propTypes.string,
  hoverColor: propTypes.string,
};
