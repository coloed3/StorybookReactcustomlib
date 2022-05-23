import React from 'react'
import styled from 'styled-components'


 const Input = styled.input`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
    border-radius: ${(props) => (props.radius ? props.radius : "0px")};
    border: ${(props) => (props.border ? `2px solid ${props.border} ` : "blue")};
   

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
    ::placeholder {
        color: ${(props) => (props.placholder ? props.placholder : "white")};
    }


`;

export default Input;


