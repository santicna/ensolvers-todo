import React from "react";

export const TodoEditView = () => {
  return (
    <>
      <h1>Editing Task </h1>
      <input name="todoedit" type="text" />
      <button>Save</button>

      <button>Cancel</button>
    </>
  );
};
