import React from 'react'
import styled from 'styled-components'


const Table = styled.table`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
    border-radius: ${(props) => (props.radius ? props.radius : "0px")};
    border: ${(props) => (props.border ? `1px solid ${props.border} ` : "blue")};
    `;



const TableHeader = styled.thead`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
   ;
    `;  


const TableBody = styled.tbody`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
    font-family: sans-serif;
    `;

 const TableRow = styled.tr`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
    `;

const TableData = styled.td`
    background-color: ${(props) => (props.primary ? props.primary : "white")};
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) => (props.primary ? "white" : "black")};
    padding : ${(props) => (props.padding ? props.padding : "0px")};
    `;

const data = [ 
    {
        id: 1,
        name: 'John Doe',
        age: 32,
    }, 
    {
        id: 2,
        name: 'Jane Doe',
        age: 30,
    },
    {
        id: 3,
        name: 'John Doe',
        age: 32,
    },
    {
        id: 4,
        name: 'Jane Doe',
        age: 30,
    },
    {
        id: 5,
        name: 'John Doe',
        age: 32,
    },
    {
        id: 6,
        name: 'Jane Doe',
        age: 30,
    },
]

const tableData = data.map((data, index) => {
    return (
      <TableRow key={index}>
        {Object.keys(data).map((key, index) => {
          return (
            <TableData key={index}>{data[key]}</TableData>
          )
        })}
      </TableRow>
    )
  }
)

const Tables = (props) => {


    return (
        <Table primary="black" padding="1px" width={200}>
            <TableHeader>
                <TableRow primary="#f2f2f2">
                    <TableData>Id</TableData>
                    <TableData>Name</TableData>
                    <TableData>Age</TableData>
                </TableRow>
                    
            </TableHeader>
            <TableBody >
               {
                     tableData
               }
            </TableBody>
        </Table>
    )
}   

export default Tables;
