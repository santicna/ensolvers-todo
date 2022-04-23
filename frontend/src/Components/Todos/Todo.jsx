import React, { useContext } from "react";
import { Link } from "react-router-dom";
import todoContext from "./TodoContext";

export const Todo = ({ id, text }) => {
  const context = useContext(todoContext);
  return (
    <>
      <input type={"checkbox"} />
      <span>{text}</span>
      <Link to={"/TodoEdit"} state={{ id: id, text: text }}>
        <button>Edit</button>
      </Link>
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
