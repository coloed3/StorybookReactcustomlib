import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : "black")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  border: ${(props) => (props.border ? props.border : "blue")};

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  ::placeholder {
    color: ${(props) =>
      props.placeholdColor ? props.placeholdColor : props.placeholdColor};
  }
`;

export default Input;

Input.PropTypes = {
  primary: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  border: PropTypes.string,
  placholderColor: PropTypes.string,
  color: PropTypes.string,
};
