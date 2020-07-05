import React from "react";

export default function MyRows(props) {
  return props.rows.map(function (row) {
    const { firstName, lastName, age, date } = row;
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{date}</td>
      </tr>
    );
  });
}

// map means to transform
// map is a higher order function
// a function that takes a function or returns a function
// an add function takes 2 numbers and returns 1 number
// map takes 1 function and returns some value
