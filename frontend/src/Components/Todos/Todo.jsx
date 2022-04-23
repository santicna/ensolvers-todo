import React, { useContext } from "react";
import todoContext from "./TodoContext";

export const Todo = ({ id, text }) => {
  const context = useContext(todoContext);
  console.log(`ACA TENES QUE VER EL TODO: ${text}`);
  return (
    <>
      <input type={"checkbox"} />
      <span>{text}</span>
      <button>Edit</button>
      <button
        onClick={() => {
          context.deleteTodo(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
