import IconButton from "./IconButton";
import { MdAssignment, MdPlusOne } from "react-icons/md";
import {
  FaAngleRight,
  FaFileContract,
  FaFileUpload,
  FaCaretDown,
  FaPlus,
} from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Margin = styled.div`
  margin: 10px;
`;

export default function ButtonDisplay() {
  return (
    <>
      <Margin>
        <IconButton
          backgroundColor='black'
          color='white'
          border='none'
          borderRadius='0px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='white'
          hoverColor='black'
        >
          Download
          <MdAssignment size={15} style={{ marginLeft: "10px" }} />
        </IconButton>
      </Margin>
      <Margin>
        <IconButton
          backgroundColor='#7CD1C0'
          color='white'
          border='none'
          borderRadius='50%'
          padding='5px'
          margin='0px'
          fontSize='0.3em'
          fontWeight='400'
          hoverBackgroundColor='#1dD1C0'
          hoverColor='#f2f2f2'
        >
          <FaAngleRight size={15} />
        </IconButton>
      </Margin>

      <Margin>
        <IconButton
          backgroundColor='#C3E6E0'
          color='#686E8E'
          border='none'
          borderRadius='0px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='#d2E6E0'
          hoverColor='black'
        >
          <FaFileContract size={15} style={{ marginRight: "5px" }} />
          Procedures
        </IconButton>
      </Margin>
      <Margin>
        <IconButton
          backgroundColor='#7CD1C0'
          color='white'
          border='none'
          borderRadius='0px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='#4cd1c2'
          hoverColor='white'
        >
          <FaPlus size={15} style={{ marginRight: "5px" }} />
          Add Attachment
          <FaCaretDown size={15} style={{ marginLeft: "5px" }} />
        </IconButton>
      </Margin>
      <Margin>
        <IconButton
          backgroundColor='transparent'
          color='#28696D'
          border='1px solid #28696D'
          borderRadius='0px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='white'
          hoverColor='#28696D'
        >
          <FaPlus size={15} style={{ marginRight: "5px" }} />
          Add Procedure
        </IconButton>
      </Margin>

      <Margin>
        <IconButton
          backgroundColor='#EF5422'
          color='white'
          border='none'
          borderRadius='3.2px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='#d15b2d'
          hoverColor='white'
        >
          Delete Claim
        </IconButton>
      </Margin>
      <Margin>
        <IconButton
          backgroundColor='transparent'
          color='#28696D'
          border='1px solid #C3E6E0'
          borderRadius='3.2px'
          padding='5px 20px'
          margin='0px'
          fontSize='0.9em'
          fontWeight='400'
          hoverBackgroundColor='none'
          hoverColor='black'
        >
          Back to Claim Summmary
        </IconButton>
      </Margin>
    </>
  );
}
