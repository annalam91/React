import React from "react";

function Comparsion() {
  const style = {
    borderStyle: "solid",
    borderWidth: "thin",
    padding: "5px",
    left: "10vw",
    width: "75%",
    display: "table",
    position: "relative",
  };

  const tableStyles = {
    borderStyle: "solid",
    borderWidth: "thin",
    padding: "5px",
  };

  return (
    <div>
      <h3>When to use UseState vs use Reducer</h3>
      <table style={style}>
        <tr>
          <th style={tableStyles}>Scenario</th>
          <th style={tableStyles}>useState</th>
          <th style={tableStyles}>useReducer</th>
        </tr>
        <tr>
          <td style={tableStyles}>
            <b>Type of State</b>
          </td>
          <td style={tableStyles}>Number, String, Boolean</td>
          <td style={tableStyles}>Number of state transitions</td>
        </tr>
        <tr>
          <td style={tableStyles}>
            <b>Number of State transitions</b>
          </td>
          <td style={tableStyles}>One of two</td>
          <td style={tableStyles}>Too many</td>
        </tr>
        <tr>
          <td style={tableStyles}>
            <b>Related state transitions</b>
          </td>
          <td style={tableStyles}>No</td>
          <td style={tableStyles}>Yes</td>
        </tr>
        <tr>
          <td style={tableStyles}>
            <b>Business logic</b>
          </td>
          <td style={tableStyles}>No business logic</td>
          <td style={tableStyles}>Complex business logic</td>
        </tr>
        <tr>
        <td style={tableStyles}>
            <b>Local vs global</b>
          </td>
          <td style={tableStyles}>Local</td>
          <td style={tableStyles}>Global</td>
        </tr>
      </table>
    </div>
  );
}

export default Comparsion;
