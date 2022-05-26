import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const fontsize = {
  small: "90%",
  medium: "150%",
  large: "200%",
};

const fontweight = {
  light: "300",
  normal: "400",
  bold: "700",
};

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) =>
    props.size ? fontsize[props.size] : fontsize.medium};
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  font-weight: ${(props) =>
    fontweight[props.weight] ? fontweight[props.weight] : fontweight.normal};
`;

export default Title;

Title.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  weight: PropTypes.string,
};
