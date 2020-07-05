import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Some thing", done: false },
  ]);

  function updateTodo(index) {
    let newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    console.log(newTodos);
  }

  function addTodo(todo) {
    let newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(newTodos);
  }

  return (
    <div>
      <input className="todoInput" />
      <br />
      <br />
      <button className="addBtn" />
      <br />
      <br />
      <br />
      <ul className="todos">
        {todos.map(({ id, text, done }, index) => {
          return (
            <Todo
              key={id}
              markDone={() => updateTodo(index)}
              text={text}
              done={done}
            />
          );
        })}
      </ul>
    </div>
  );
}
