import React, { useState } from "react";

export const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  return (
    <>
      <input
        name="todo"
        type="text"
        placeholder="New Task"
        value={todo}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          addTodo(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </>
  );
};
