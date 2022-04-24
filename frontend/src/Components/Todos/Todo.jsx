import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import todoContext from "./TodoContext";

export const Todo = ({ id, text }) => {
  const [done, setDone] = useState(false);
  const context = useContext(todoContext);
  return (
    <div className="item-container">
      <div className="item-text">
        <input
          id={`check${id}`}
          type={"checkbox"}
          onChange={() => setDone(!done)}
        />
        <label htmlFor={`check${id}`}>
          <span className={done ? "checked" : "unchecked"}>{text}</span>
        </label>
      </div>
      <div className="item-buttons">
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
      </div>
    </div>
  );
};
