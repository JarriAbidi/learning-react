import React from "react";
import MyRows from "./components/MyRows";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const rows = [
    {
      firstName: "jarri",
      lastName: "abidi",
      age: 27,
      date: "1993-02-27",
    },
    {
      firstName: "hussain",
      lastName: "ali",
      age: 20,
      date: "1996-02-27",
    },
    {
      firstName: "muslim",
      lastName: "kazmi",
      age: 23,
      date: "1994-02-27",
    },
  ];

  return (
    <div className="background">
      <form>
        <input placeholder="First name" required />
        <br />
        <input placeholder="Last name" required />
        <br />
        <input type="number" placeholder="Age" min="5" value="10" required />
        <br />
        <input type="date" value="1902-02-02" />
        <br />
        <input type="submit" />
      </form>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Date of birth</th>
        </tr>
        <MyRows rows={rows} />
      </table>
      <br />
    </div>
  );
}

// small size
// medium size
// large size
// small price
// medium price
// large price

export default App;
