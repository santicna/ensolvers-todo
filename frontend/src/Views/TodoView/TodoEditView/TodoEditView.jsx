import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editTodo } from "../../../Services/TodosApi";

export const TodoEditView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  const text = location.state.text;

  const [newText, setNewText] = useState(text);

  function handleInputChange(e) {
    setNewText(e.target.value);
  }

  const modifyTodoText = async (id, text) => {
    await editTodo(id, { text: text });
  };

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
          modifyTodoText(id, newText);
          navigate(-1);
        }}
        style={{ margin: "10px" }}
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
