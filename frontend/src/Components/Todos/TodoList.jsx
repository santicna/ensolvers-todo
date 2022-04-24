import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="item-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} text={todo.text} />
          </li>
        ))}
      </ul>
    </>
  );
};
