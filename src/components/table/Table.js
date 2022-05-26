import React from "react";
import styled from "styled-components";

const Table = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #ddd;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Doe",
    age: 32,
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 5,
    name: "John Doe",
    age: 32,
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 30,
  },
];

const tableData = data.map((data, index) => {
  return (
    <tr key={index}>
      {Object.keys(data).map((key, index) => {
        return <td key={index}>{data[key]}</td>;
      })}
    </tr>
  );
});

const Tables = (props) => {
  return (
    <Table primary='black' padding='1px' width={200}>
      <thead>
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </Table>
  );
};

export default Tables;
