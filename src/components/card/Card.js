import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  margin-bottom: 20px;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export default Card;
