import React from "react";
import "./Todo.css";

export default function Todo(props) {
  return (
    <li id={props.key} onClick={() => props.markDone(props.key)}>
      {props.done ? <del>{props.text}</del> : props.text}
    </li>
  );
}
