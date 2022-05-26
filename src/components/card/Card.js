import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  color: ${(props) => (props.primary ? props.color : "black")};
  background-color: ${(props) => (props.primary ? props.primary : "white")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  box-shadow: -2px 33px 60px -39px rgba(0, 0, 0, 0.75);
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  margin-bottom: 20px;
  border: ${(props) => (props.border ? `1px solid ${props.border} ` : "blue")};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export default Card;

Card.propTypes = {
  primary: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
