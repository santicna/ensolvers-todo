import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const TodoEditView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  const text = location.state.text;
  const folder = location.state.folder;

  const [newText, setNewText] = useState(text);
  const todos = JSON.parse(localStorage.getItem(`todos-${folder}`));

  function handleInputChange(e) {
    setNewText(e.target.value);
  }

  function editTodo(id, text) {
    const editItem = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: id,
          text: text.trim(),
        };
      }
      return todo;
    });
    localStorage.setItem(`todos-${folder}`, JSON.stringify(editItem));
  }
  return (
    <>
      <h1>Editing Task "{text}"</h1>
      <input
        name="todoedit"
        type="text"
        value={newText}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          editTodo(id, newText);
          navigate(-1);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </button>
    </>
  );
};
